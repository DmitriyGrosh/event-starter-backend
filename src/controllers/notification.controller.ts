import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { NotificationService } from '../services/notification.service'

const notificationService = new NotificationService()
const LONG_POLLING_TIMEOUT = 30000 // 30 seconds
const POLLING_INTERVAL = 1000 // 1 second

export async function notificationController(fastify: FastifyInstance) {
  const Notification = Type.Object({
    id: Type.Number(),
    type: Type.String(),
    title: Type.String(),
    message: Type.String(),
    metadata: Type.Optional(Type.Object({})),
    read: Type.Boolean(),
    createdAt: Type.String()
  })

  // Get user's unread notifications
  fastify.get('/', {
    schema: {
      tags: ['notifications'],
      summary: 'Get user notifications',
      description: 'Returns all unread notifications for the authenticated user',
      security: [{ bearerAuth: [] }],
      response: {
        200: Type.Array(Notification)
      }
    }
  }, async (request) => {
    const { userId } = request.user as { userId: number }
    return notificationService.getUserNotifications(userId)
  })

  // Long polling endpoint for new notifications
  fastify.get('/poll', {
    schema: {
      tags: ['notifications'],
      summary: 'Long poll for new notifications',
      description: 'Waits for new notifications using long polling',
      security: [{ bearerAuth: [] }],
      querystring: Type.Object({
        lastNotificationId: Type.Optional(Type.Number())
      }),
      response: {
        200: Type.Object({
          notifications: Type.Array(Notification),
          lastNotificationId: Type.Number()
        })
      }
    }
  }, async (request, _reply) => {
    const { userId } = request.user as { userId: number }
    const { lastNotificationId } = request.query as { lastNotificationId?: number }

    const startTime = Date.now()

    // Keep checking for new notifications until timeout
    while (Date.now() - startTime < LONG_POLLING_TIMEOUT) {
      const notifications = await notificationService.getNewNotifications(userId, lastNotificationId)

      if (notifications.length > 0) {
        // If we have new notifications, return them immediately
        const maxId = Math.max(...notifications.map(n => n.id))
        return {
          notifications,
          lastNotificationId: maxId
        }
      }

      // Wait before checking again
      await new Promise(resolve => setTimeout(resolve, POLLING_INTERVAL))
    }

    // If no new notifications after timeout, return empty array
    const notifications = await notificationService.getUserNotifications(userId)
    const currentMaxId = notifications.length > 0
      ? Math.max(...notifications.map(n => n.id))
      : lastNotificationId || 0

    return {
      notifications: [],
      lastNotificationId: currentMaxId
    }
  })

  // Mark notification as read
  fastify.patch('/:id/read', {
    schema: {
      tags: ['notifications'],
      summary: 'Mark notification as read',
      description: 'Marks a specific notification as read',
      security: [{ bearerAuth: [] }],
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        200: Notification,
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { userId } = request.user as { userId: number }
    const { id } = request.params as { id: number }
    return notificationService.markAsRead(id, userId)
  })

  // Check upcoming events and create notifications (admin only)
  fastify.post('/check-upcoming-events', {
    schema: {
      tags: ['notifications'],
      summary: 'Check upcoming events',
      description: 'Checks for upcoming events and creates notifications for ticket holders (admin only)',
      security: [{ bearerAuth: [] }],
      response: {
        200: Type.Array(Notification)
      }
    }
  }, async (_request) => {
    // TODO: Add admin check here
    return notificationService.checkUpcomingEvents()
  })
}
