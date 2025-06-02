import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { EventService } from '../services/event.service'
import { Prisma } from '../generated/prisma'

const eventService = new EventService()

export async function eventController(fastify: FastifyInstance) {
  const Event = Type.Object({
    id: Type.Number(),
    title: Type.String(),
    description: Type.Optional(Type.String()),
    date: Type.String(),
    userId: Type.Number(),
    createdAt: Type.String(),
    user: Type.Object({
      id: Type.Number(),
      name: Type.String(),
      email: Type.String(),
      createdAt: Type.String()
    })
  })

  const CreateEventBody = Type.Object({
    title: Type.String(),
    description: Type.Optional(Type.String()),
    date: Type.String(),
    userId: Type.Number()
  })

  const UpdateEventBody = Type.Partial(CreateEventBody)

  const QueryString = Type.Object({
    userId: Type.Optional(Type.Number()),
    search: Type.Optional(Type.String()),
    fromDate: Type.Optional(Type.String({ format: 'date-time' })),
    toDate: Type.Optional(Type.String({ format: 'date-time' }))
  })

  // Get all events with filters
  fastify.get('/', {
    schema: {
      querystring: QueryString,
      response: {
        200: Type.Array(Event)
      }
    }
  }, async (request) => {
    const query = request.query as {
      userId?: number
      search?: string
      fromDate?: string
      toDate?: string
    }

    return eventService.findAll({
      ...query,
      fromDate: query.fromDate ? new Date(query.fromDate) : undefined,
      toDate: query.toDate ? new Date(query.toDate) : undefined
    })
  })

  // Get event by ID
  fastify.get('/:id', {
    schema: {
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

  // Create event
  fastify.post('/', {
    schema: {
      body: CreateEventBody,
      response: {
        201: Event,
        400: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request, reply) => {
    const data = request.body as {
      title: string
      description?: string
      date: string
      userId: number
    }

    const eventData: Prisma.EventCreateInput = {
      title: data.title,
      description: data.description,
      date: new Date(data.date),
      user: {
        connect: { id: data.userId }
      }
    }

    const event = await eventService.create(eventData)
    reply.code(201)
    return event
  })

  // Update event
  fastify.patch('/:id', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      body: UpdateEventBody,
      response: {
        200: Event,
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { id } = request.params as { id: number }
    const data = request.body as Partial<{
      title: string
      description?: string
      date: string
      userId: number
    }>

    const eventData: Prisma.EventUpdateInput = {
      ...(data.title && { title: data.title }),
      ...(data.description !== undefined && { description: data.description }),
      ...(data.date && { date: new Date(data.date) }),
      ...(data.userId && {
        user: {
          connect: { id: data.userId }
        }
      })
    }

    return eventService.update(id, eventData)
  })

  // Delete event
  fastify.delete('/:id', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        204: Type.Null(),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request, reply) => {
    const { id } = request.params as { id: number }
    await eventService.delete(id)
    reply.code(204)
  })
} 