import prisma from '../db/client'
import { EmailService } from './email.service'

const emailService = new EmailService()

export class TicketService {
  async purchaseTicket(ticketId: number, userId: number, quantity: number) {
    return prisma.$transaction(async (tx) => {
      // Get ticket with event details
      const ticket = await tx.ticket.findUnique({
        where: { id: ticketId },
        include: {
          event: true
        }
      })

      if (!ticket) {
        throw new Error('Ticket not found')
      }

      if (ticket.quantity < quantity) {
        throw new Error('Not enough tickets available')
      }

      // Calculate total price
      const totalPaid = ticket.price.toNumber() * quantity

      // Create purchase record
      const purchase = await tx.ticketPurchase.create({
        data: {
          ticketId,
          userId,
          quantity,
          totalPaid,
          status: 'COMPLETED'
        },
        include: {
          ticket: {
            include: {
              event: true
            }
          },
          user: true
        }
      })

      // Update ticket quantity
      await tx.ticket.update({
        where: { id: ticketId },
        data: {
          quantity: {
            decrement: quantity
          }
        }
      })

      // Send confirmation email
      await emailService.sendTicketPurchaseConfirmation(
        purchase.user,
        purchase.ticket.event,
        purchase.ticket,
        quantity,
        totalPaid
      )

      return purchase
    })
  }

  async transferTicket(purchaseId: number, fromUserId: number, toUserId: number, quantity: number) {
    return prisma.$transaction(async (tx) => {
      // Get the original purchase
      const purchase = await tx.ticketPurchase.findUnique({
        where: {
          id: purchaseId,
          userId: fromUserId // Ensure the sender owns the tickets
        },
        include: {
          ticket: true
        }
      })

      if (!purchase) {
        throw new Error('Ticket purchase not found')
      }

      if (purchase.quantity < quantity) {
        throw new Error('Not enough tickets to transfer')
      }

      // Calculate price for transferred tickets
      const pricePerTicket = purchase.totalPaid.toNumber() / purchase.quantity
      const transferTotalPaid = pricePerTicket * quantity

      // Create new purchase for recipient
      const toPurchase = await tx.ticketPurchase.create({
        data: {
          ticketId: purchase.ticketId,
          userId: toUserId,
          quantity,
          totalPaid: transferTotalPaid,
          status: 'COMPLETED'
        }
      })

      // Update original purchase quantity
      await tx.ticketPurchase.update({
        where: { id: purchaseId },
        data: {
          quantity: {
            decrement: quantity
          },
          totalPaid: purchase.totalPaid.toNumber() - transferTotalPaid
        }
      })

      // Create transfer record
      const transfer = await tx.ticketTransfer.create({
        data: {
          fromPurchaseId: purchaseId,
          toPurchaseId: toPurchase.id,
          quantity,
          status: 'COMPLETED'
        }
      })

      return transfer
    })
  }

  async getUserTickets(userId: number) {
    return prisma.ticketPurchase.findMany({
      where: {
        userId,
        status: 'COMPLETED'
      },
      include: {
        ticket: {
          include: {
            event: true
          }
        }
      }
    })
  }

  async getEventTickets(eventId: number) {
    return prisma.ticket.findMany({
      where: {
        eventId
      },
      include: {
        _count: {
          select: {
            purchases: true
          }
        }
      }
    })
  }

  async getTicketAvailability(ticketId: number) {
    const ticket = await prisma.ticket.findUnique({
      where: { id: ticketId },
      include: {
        _count: {
          select: {
            purchases: true
          }
        }
      }
    })

    if (!ticket) {
      throw new Error('Ticket not found')
    }

    const soldCount = await prisma.ticketPurchase.aggregate({
      where: {
        ticketId,
        status: 'COMPLETED'
      },
      _sum: {
        quantity: true
      }
    })

    return {
      ticket,
      totalQuantity: ticket.quantity,
      soldCount: soldCount._sum.quantity || 0,
      availableCount: ticket.quantity - (soldCount._sum.quantity || 0)
    }
  }
}
