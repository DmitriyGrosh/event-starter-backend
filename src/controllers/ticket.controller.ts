import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { TicketService } from '../services/ticket.service'
import { TicketTransferService } from '../services/ticket-transfer.service'

const ticketService = new TicketService()
const transferService = new TicketTransferService()

export async function ticketController(fastify: FastifyInstance) {
  const TicketPurchase = Type.Object({
    id: Type.Number(),
    quantity: Type.Number(),
    totalPaid: Type.Number(),
    status: Type.String(),
    createdAt: Type.String(),
    ticket: Type.Object({
      id: Type.Number(),
      name: Type.String(),
      description: Type.Optional(Type.String()),
      price: Type.Number(),
      quantity: Type.Number(),
      eventId: Type.Number(),
      event: Type.Object({
        id: Type.Number(),
        title: Type.String(),
        description: Type.Optional(Type.String()),
        location: Type.String(),
        dateStart: Type.String(),
        dateEnd: Type.String(),
        ownerId: Type.Number()
      })
    }),
    user: Type.Object({
      id: Type.Number(),
      name: Type.String(),
      email: Type.String()
    })
  })

  const TicketAvailability = Type.Object({
    ticket: Type.Object({
      id: Type.Number(),
      name: Type.String(),
      description: Type.Optional(Type.String()),
      price: Type.Number(),
      quantity: Type.Number(),
      eventId: Type.Number()
    }),
    totalQuantity: Type.Number(),
    soldCount: Type.Number(),
    availableCount: Type.Number()
  })

  const TicketTransfer = Type.Object({
    id: Type.Number(),
    quantity: Type.Number(),
    status: Type.String(),
    createdAt: Type.String(),
    fromPurchase: Type.Object({
      id: Type.Number(),
      quantity: Type.Number(),
      status: Type.String(),
      user: Type.Object({
        id: Type.Number(),
        name: Type.String(),
        email: Type.String()
      }),
      ticket: Type.Object({
        id: Type.Number(),
        name: Type.String(),
        event: Type.Object({
          id: Type.Number(),
          title: Type.String(),
          dateStart: Type.String(),
          dateEnd: Type.String()
        })
      })
    }),
    toPurchase: Type.Object({
      id: Type.Number(),
      quantity: Type.Number(),
      status: Type.String(),
      user: Type.Object({
        id: Type.Number(),
        name: Type.String(),
        email: Type.String()
      })
    })
  })

  // Buy tickets
  fastify.post('/buy/:id', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      body: Type.Object({
        quantity: Type.Number()
      }),
      response: {
        200: TicketPurchase,
        400: Type.Object({
          message: Type.String()
        }),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { id } = request.params as { id: number }
    const { quantity } = request.body as { quantity: number }
    const { userId } = request.user as { userId: number }

    return ticketService.purchaseTicket(id, userId, quantity)
  })

  // Get user's tickets
  fastify.get('/my-tickets', {
    schema: {
      response: {
        200: Type.Array(TicketPurchase)
      }
    }
  }, async (request) => {
    const { userId } = request.user as { userId: number }
    console.log('==========>userId', userId);
    return ticketService.getUserTickets(userId)
  })

  // Check ticket availability
  fastify.get('/availability/:id', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        200: TicketAvailability,
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { id } = request.params as { id: number }
    return ticketService.getTicketAvailability(id)
  })

  // Transfer tickets to another user
  fastify.post('/transfer/:purchaseId', {
    schema: {
      params: Type.Object({
        purchaseId: Type.Number()
      }),
      body: Type.Object({
        toUserId: Type.Number(),
        quantity: Type.Number()
      }),
      response: {
        200: TicketTransfer,
        400: Type.Object({
          message: Type.String()
        }),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { purchaseId } = request.params as { purchaseId: number }
    const { toUserId, quantity } = request.body as { toUserId: number, quantity: number }
    const { userId: fromUserId } = request.user as { userId: number }

    return transferService.transferTickets(fromUserId, toUserId, purchaseId, quantity)
  })

  // Get transfer history
  fastify.get('/transfers', {
    schema: {
      response: {
        200: Type.Array(TicketTransfer)
      }
    }
  }, async (request) => {
    const { userId } = request.user as { userId: number }
    return transferService.getTransferHistory(userId)
  })
}
