import prisma from '../db/client'

export class TicketService {
  async buyTicket(userId: number, ticketId: number, quantity: number) {
    // Start a transaction since we need to update multiple things
    return prisma.$transaction(async (tx) => {
      // Get ticket and check availability
      const ticket = await tx.ticket.findUnique({
        where: { id: ticketId },
        include: {
          event: true,
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

      // Calculate total sold tickets
      const totalSold = await tx.ticketPurchase.aggregate({
        where: {
          ticketId,
          status: 'COMPLETED'
        },
        _sum: {
          quantity: true
        }
      })

      const soldCount = totalSold._sum.quantity || 0
      const availableTickets = ticket.quantity - soldCount

      if (availableTickets < quantity) {
        throw new Error('Not enough tickets available')
      }

      // Calculate total price
      const totalPrice = Number(ticket.price) * quantity

      // Create the purchase
      const purchase = await tx.ticketPurchase.create({
        data: {
          userId,
          ticketId,
          quantity,
          totalPaid: totalPrice,
          status: 'COMPLETED'
        },
        include: {
          ticket: {
            include: {
              event: true
            }
          },
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      })

      // Update the ticket's available quantity
      await tx.ticket.update({
        where: { id: ticketId },
        data: {
          quantity: availableTickets - quantity
        }
      })

      return purchase
    })
  }

  async getUserTickets(userId: number) {
    console.log('==========>userId', userId);
    return prisma.ticketPurchase.findMany({
      where: {
        userId,
        status: 'COMPLETED'
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        ticket: {
          include: {
            event: {
              include: {
                owner: {
                  select: {
                    id: true,
                    name: true,
                    email: true
                  }
                }
              }
            }
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
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

    const totalSold = await prisma.ticketPurchase.aggregate({
      where: {
        ticketId,
        status: 'COMPLETED'
      },
      _sum: {
        quantity: true
      }
    })

    const soldCount = totalSold._sum.quantity || 0
    const availableCount = ticket.quantity - soldCount

    return {
      ticket,
      totalQuantity: ticket.quantity,
      soldCount,
      availableCount
    }
  }
}
