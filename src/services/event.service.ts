import prisma from '../db/client'

export class EventService {
  async findAll(filters?: {
    userId?: number
    search?: string
    fromDate?: Date
    toDate?: Date
  }) {
    const where: any = {}

    if (filters?.userId) {
      where.ownerId = filters.userId
    }

    if (filters?.search) {
      where.OR = [
        { title: { contains: filters.search, mode: 'insensitive' } },
        { description: { contains: filters.search, mode: 'insensitive' } }
      ]
    }

    if (filters?.fromDate) {
      where.dateStart = { gte: filters.fromDate }
    }

    if (filters?.toDate) {
      where.dateEnd = { lte: filters.toDate }
    }

    return prisma.event.findMany({
      where,
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        _count: {
          select: {
            subscribers: true
          }
        }
      }
    })
  }

  async findById(id: number) {
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        subscribers: {
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
        }
      }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    return event
  }

  async create(data: {
    title: string
    description?: string
    dateStart: string
    dateEnd: string
    ownerId: number
  }) {
    return prisma.event.create({
      data,
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })
  }

  async update(id: number, data: Partial<{
    title: string
    description?: string
    dateStart: string
    dateEnd: string
  }>) {
    const event = await prisma.event.findUnique({
      where: { id }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    return prisma.event.update({
      where: { id },
      data,
      include: {
        owner: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    })
  }

  async delete(id: number) {
    const event = await prisma.event.findUnique({
      where: { id }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    return prisma.event.delete({
      where: { id }
    })
  }
}
