import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { EventService } from '../services/event.service'

const eventService = new EventService()

export async function publicEventController(fastify: FastifyInstance) {
  const Ticket = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    description: Type.Optional(Type.String()),
    price: Type.Number(),
    quantity: Type.Number(),
    eventId: Type.Number(),
    createdAt: Type.String()
  })

  const Event = Type.Object({
    id: Type.Number(),
    title: Type.String(),
    description: Type.Optional(Type.String()),
    location: Type.String(),
    dateStart: Type.String(),
    dateEnd: Type.String(),
    ownerId: Type.Number(),
    createdAt: Type.String(),
    owner: Type.Object({
      id: Type.Number(),
      name: Type.String(),
      email: Type.String()
    }),
    tickets: Type.Array(Ticket),
    _count: Type.Optional(Type.Object({
      subscribers: Type.Number()
    }))
  })

  // Get all events with pagination
  fastify.get('/', {
    schema: {
      tags: ['events'],
      summary: 'List all events',
      description: 'Returns a paginated list of all events with optional sorting',
      querystring: Type.Object({
        page: Type.Optional(Type.Number({ default: 1, minimum: 1 })),
        limit: Type.Optional(Type.Number({ default: 10, minimum: 1, maximum: 100 })),
        sortBy: Type.Optional(Type.Union([
          Type.Literal('dateStart'),
          Type.Literal('dateEnd'),
          Type.Literal('title'),
          Type.Literal('createdAt')
        ], { default: 'dateStart' })),
        order: Type.Optional(Type.Union([
          Type.Literal('asc'),
          Type.Literal('desc')
        ], { default: 'asc' }))
      }),
      response: {
        200: Type.Object({
          events: Type.Array(Event),
          pagination: Type.Object({
            total: Type.Number(),
            page: Type.Number(),
            pageSize: Type.Number(),
            pageCount: Type.Number()
          })
        })
      }
    }
  }, async (request) => {
    const { page = 1, limit = 10, sortBy = 'dateStart', order = 'asc' } = request.query as {
      page?: number
      limit?: number
      sortBy?: 'dateStart' | 'dateEnd' | 'title' | 'createdAt'
      order?: 'asc' | 'desc'
    }

    return eventService.findAllPaginated({
      page,
      limit,
      sortBy,
      order
    })
  })

  // Get event by ID
  fastify.get('/:id', {
    schema: {
      tags: ['events'],
      summary: 'Get event by ID',
      description: 'Returns detailed information about a specific event',
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        200: Event,
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { id } = request.params as { id: number }
    return eventService.findById(id)
  })
} 