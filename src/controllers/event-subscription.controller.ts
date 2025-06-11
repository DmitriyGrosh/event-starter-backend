import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { EventSubscriptionService } from '@/services/event-subscription.service'

const eventSubscriptionService = new EventSubscriptionService()

export async function eventSubscriptionController(fastify: FastifyInstance) {
  const Event = Type.Object({
    id: Type.Number(),
    title: Type.String(),
    description: Type.Optional(Type.String()),
    location: Type.String(),
    dateStart: Type.String(),
    dateEnd: Type.String(),
    ownerId: Type.Number(),
    createdAt: Type.String()
  })

  const User = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    email: Type.String(),
    createdAt: Type.String()
  })

  const EventSubscription = Type.Object({
    userId: Type.Number(),
    eventId: Type.Number(),
    createdAt: Type.String(),
    event: Event,
    user: User
  })

  // Subscribe to an event
  fastify.post('/:eventId', {
    schema: {
      params: Type.Object({
        eventId: Type.Number()
      }),
      response: {
        200: EventSubscription,
        400: Type.Object({
          message: Type.String()
        }),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { eventId } = request.params as { eventId: number }
    const { userId } = request.user as { userId: number }

    return eventSubscriptionService.subscribe(userId, eventId)
  })

  // Unsubscribe from an event
  fastify.delete('/:eventId', {
    schema: {
      params: Type.Object({
        eventId: Type.Number()
      }),
      response: {
        204: Type.Null(),
        400: Type.Object({
          message: Type.String()
        }),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request, reply) => {
    const { eventId } = request.params as { eventId: number }
    const { userId } = request.user as { userId: number }

    await eventSubscriptionService.unsubscribe(userId, eventId)
    reply.code(204)
  })

  // Get event subscribers
  fastify.get('/event/:eventId/subscribers', {
    schema: {
      params: Type.Object({
        eventId: Type.Number()
      }),
      response: {
        200: Type.Array(Type.Object({
          user: User,
          createdAt: Type.String()
        })),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { eventId } = request.params as { eventId: number }
    return eventSubscriptionService.getEventSubscribers(eventId)
  })

  // Get user's subscriptions
  fastify.get('/user/subscriptions', {
    schema: {
      response: {
        200: Type.Array(Type.Object({
          event: Event,
          createdAt: Type.String()
        }))
      }
    }
  }, async (request) => {
    const { userId } = request.user as { userId: number }
    return eventSubscriptionService.getUserSubscriptions(userId)
  })
} 