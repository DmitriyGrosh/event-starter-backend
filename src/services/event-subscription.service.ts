import prisma from '../db/client'

export class EventSubscriptionService {
  async subscribe(userId: number, eventId: number) {
    // Check if event exists
    const event = await prisma.event.findUnique({
      where: { id: eventId }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    // Check if user is not the owner
    if (event.ownerId === userId) {
      throw new Error('Cannot subscribe to your own event')
    }

    // Check if already subscribed
    const existingSubscription = await prisma.eventSubscription.findUnique({
      where: {
        userId_eventId: {
          userId,
          eventId
        }
      }
    })

    if (existingSubscription) {
      throw new Error('Already subscribed to this event')
    }

    // Create subscription
    return prisma.eventSubscription.create({
      data: {
        userId,
        eventId
      },
      include: {
        event: true,
        user: true
      }
    })
  }

  async unsubscribe(userId: number, eventId: number) {
    // Check if subscription exists
    const subscription = await prisma.eventSubscription.findUnique({
      where: {
        userId_eventId: {
          userId,
          eventId
        }
      }
    })

    if (!subscription) {
      throw new Error('Not subscribed to this event')
    }

    // Delete subscription
    return prisma.eventSubscription.delete({
      where: {
        userId_eventId: {
          userId,
          eventId
        }
      }
    })
  }

  async getEventSubscribers(eventId: number) {
    return prisma.eventSubscription.findMany({
      where: { eventId },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            email: true,
            createdAt: true
          }
        }
      }
    })
  }

  async getUserSubscriptions(userId: number) {
    return prisma.eventSubscription.findMany({
      where: { userId },
      include: {
        event: true
      }
    })
  }
} 