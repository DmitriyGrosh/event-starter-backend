import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { TicketService } from '../services/ticket.service'
import { authenticate } from '../middleware/auth'

const ticketService = new TicketService()

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

  // Buy tickets
  fastify.post('/:id/buy', {
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

    return ticketService.buyTicket(userId, id, quantity)
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
  fastify.get('/:id/availability', {
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
}
