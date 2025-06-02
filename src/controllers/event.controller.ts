import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { EventService } from '../services/event.service'
import { EventSubscriptionService } from '../services/event-subscription.service'

const eventService = new EventService()
const subscriptionService = new EventSubscriptionService()

export async function eventController(fastify: FastifyInstance) {
  const Event = Type.Object({
    id: Type.Number(),
    title: Type.String(),
    description: Type.Optional(Type.String()),
    dateStart: Type.String(),
    dateEnd: Type.String(),
    ownerId: Type.Number(),
    createdAt: Type.String(),
    owner: Type.Object({
      id: Type.Number(),
      name: Type.String(),
      email: Type.String()
    }),
    _count: Type.Optional(Type.Object({
      subscribers: Type.Number()
    }))
  })

  const EventWithSubscribers = Type.Object({
    id: Type.Number(),
    title: Type.String(),
    description: Type.Optional(Type.String()),
    dateStart: Type.String(),
    dateEnd: Type.String(),
    ownerId: Type.Number(),
    createdAt: Type.String(),
    owner: Type.Object({
      id: Type.Number(),
      name: Type.String(),
      email: Type.String()
    }),
    subscribers: Type.Array(Type.Object({
      user: Type.Object({
        id: Type.Number(),
        name: Type.String(),
        email: Type.String(),
        createdAt: Type.String()
      })
    }))
  })

  const CreateEventBody = Type.Object({
    title: Type.String(),
    description: Type.Optional(Type.String()),
    dateStart: Type.String(),
    dateEnd: Type.String()
  })

  const UpdateEventBody = Type.Partial(CreateEventBody)

  // Get all events with subscription counts
  fastify.get('/', {
    schema: {
      response: {
        200: Type.Array(Event)
      }
    }
  }, async () => {
    return eventService.findAll()
  })

  // Get event by ID with subscribers
  fastify.get('/:id', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        200: EventWithSubscribers,
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
        201: Event
      }
    }
  }, async (request, reply) => {
    const { userId } = request.user as { userId: number }
    const data = {
      ...request.body as any,
      ownerId: userId
    }

    const event = await eventService.create(data)
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
        403: Type.Object({
          message: Type.String()
        }),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { id } = request.params as { id: number }
    const { userId } = request.user as { userId: number }
    const data = request.body as any

    // Check if user owns the event
    const event = await eventService.findById(id)
    if (!event) {
      throw new Error('Event not found')
    }
    if (event.ownerId !== userId) {
      throw new Error('Not authorized to update this event')
    }

    return eventService.update(id, data)
  })

  // Delete event
  fastify.delete('/:id', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        204: Type.Null(),
        403: Type.Object({
          message: Type.String()
        }),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request, reply) => {
    const { id } = request.params as { id: number }
    const { userId } = request.user as { userId: number }

    // Check if user owns the event
    const event = await eventService.findById(id)
    if (!event) {
      throw new Error('Event not found')
    }
    if (event.ownerId !== userId) {
      throw new Error('Not authorized to delete this event')
    }

    await eventService.delete(id)
    reply.code(204)
  })

  // Subscribe to event
  fastify.post('/:id/subscribe', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        200: Type.Object({
          message: Type.String()
        }),
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
    const { userId } = request.user as { userId: number }

    await subscriptionService.subscribe(userId, id)
    return { message: 'Successfully subscribed to event' }
  })

  // Unsubscribe from event
  fastify.delete('/:id/subscribe', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        200: Type.Object({
          message: Type.String()
        }),
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
    const { userId } = request.user as { userId: number }

    await subscriptionService.unsubscribe(userId, id)
    return { message: 'Successfully unsubscribed from event' }
  })

  // Get event subscribers
  fastify.get('/:id/subscribers', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        200: Type.Array(Type.Object({
          user: Type.Object({
            id: Type.Number(),
            name: Type.String(),
            email: Type.String(),
            createdAt: Type.String()
          })
        })),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { id } = request.params as { id: number }
    return subscriptionService.getEventSubscribers(id)
  })
}
