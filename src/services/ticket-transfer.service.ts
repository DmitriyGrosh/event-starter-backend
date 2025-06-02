import prisma from '../db/client'

export class TicketTransferService {
  async transferTickets(fromUserId: number, toUserId: number, purchaseId: number, quantity: number) {
    return prisma.$transaction(async (tx) => {
      // Get the original purchase
      const purchase = await tx.ticketPurchase.findUnique({
        where: { id: purchaseId },
        include: {
          ticket: true,
          user: true
        }
      })

      if (!purchase) {
        throw new Error('Ticket purchase not found')
      }

      // Verify ownership
      if (purchase.userId !== fromUserId) {
        throw new Error('You do not own these tickets')
      }

      // Verify quantity
      if (purchase.quantity < quantity) {
        throw new Error('Not enough tickets available to transfer')
      }

      // Create new purchase record for recipient
      const newPurchase = await tx.ticketPurchase.create({
        data: {
          userId: toUserId,
          ticketId: purchase.ticketId,
          quantity: quantity,
          totalPaid: 0, // No payment for transfers
          status: 'COMPLETED'
        }
      })

      // Update original purchase
      const remainingQuantity = purchase.quantity - quantity
      await tx.ticketPurchase.update({
        where: { id: purchaseId },
        data: {
          quantity: remainingQuantity,
          status: remainingQuantity === 0 ? 'TRANSFERRED' : 'COMPLETED'
        }
      })

      // Create transfer record
      const transfer = await tx.ticketTransfer.create({
        data: {
          fromPurchaseId: purchaseId,
          toPurchaseId: newPurchase.id,
          quantity,
          status: 'COMPLETED'
        },
        include: {
          fromPurchase: {
            include: {
              user: true,
              ticket: {
                include: {
                  event: true
                }
              }
            }
          },
          toPurchase: {
            include: {
              user: true
            }
          }
        }
      })

      return transfer
    })
  }

  async getTransferHistory(userId: number) {
    const transfers = await prisma.ticketTransfer.findMany({
      where: {
        OR: [
          {
            fromPurchase: {
              userId
            }
          },
          {
            toPurchase: {
              userId
            }
          }
        ]
      },
      include: {
        fromPurchase: {
          include: {
            user: true,
            ticket: {
              include: {
                event: true
              }
            }
          }
        },
        toPurchase: {
          include: {
            user: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    })

    return transfers
  }
} 