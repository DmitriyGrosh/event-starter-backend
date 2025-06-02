import prisma from '../db/client'
import { addDays, startOfDay, endOfDay } from 'date-fns'
import { User } from '../generated/prisma'

export class NotificationService {
  async checkUpcomingEvents() {
    // Get all events starting tomorrow
    const tomorrow = addDays(new Date(), 1)
    const startOfTomorrow = startOfDay(tomorrow)
    const endOfTomorrow = endOfDay(tomorrow)

    const upcomingEvents = await prisma.event.findMany({
      where: {
        dateStart: {
          gte: startOfTomorrow,
          lte: endOfTomorrow
        }
      },
      include: {
        tickets: {
          include: {
            purchases: {
              include: {
                user: true
              }
            }
          }
        }
      }
    })

    const notifications = []

    for (const event of upcomingEvents) {
      // Get unique users who have tickets
      const ticketHolders = new Set<User>()

      event.tickets.forEach(ticket => {
        ticket.purchases.forEach(purchase => {
          if (purchase.user) {
            ticketHolders.add(purchase.user)
          }
        })
      })

      // Create notifications for each ticket holder
      for (const user of ticketHolders) {
        const notification = await prisma.notification.create({
          data: {
            userId: user.id,
            type: 'EVENT_REMINDER',
            title: 'Event Starting Tomorrow',
            message: `The event "${event.title}" is starting tomorrow at ${new Date(event.dateStart).toLocaleString()}`,
            metadata: {
              eventId: event.id,
              eventTitle: event.title,
              eventDate: event.dateStart
            }
          }
        })
        notifications.push(notification)
      }
    }

    return notifications
  }

  async getUserNotifications(userId: number) {
    return prisma.notification.findMany({
      where: {
        userId,
        read: false
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  async getNewNotifications(userId: number, lastNotificationId?: number) {
    return prisma.notification.findMany({
      where: {
        userId,
        read: false,
        ...(lastNotificationId ? { id: { gt: lastNotificationId } } : {})
      },
      orderBy: {
        createdAt: 'desc'
      }
    })
  }

  async markAsRead(notificationId: number, userId: number) {
    return prisma.notification.update({
      where: {
        id: notificationId,
        userId // Ensure the notification belongs to the user
      },
      data: {
        read: true
      }
    })
  }
}
