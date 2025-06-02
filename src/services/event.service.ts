import prisma from '../db/client'
import { Prisma } from '../generated/prisma'

export class EventService {
  async findAll(query?: {
    userId?: number
    search?: string
    fromDate?: Date
    toDate?: Date
  }) {
    const where: Prisma.EventWhereInput = {}

    if (query?.userId) {
      where.userId = query.userId
    }

    if (query?.search) {
      where.OR = [
        { title: { contains: query.search, mode: 'insensitive' } },
        { description: { contains: query.search, mode: 'insensitive' } }
      ]
    }

    if (query?.fromDate || query?.toDate) {
      // Find events that overlap with the given date range
      // An event overlaps if:
      // - Event starts before the range ends AND
      // - Event ends after the range starts
      where.AND = [
        ...(query.fromDate ? [{ dateEnd: { gte: query.fromDate } }] : []),
        ...(query.toDate ? [{ dateStart: { lte: query.toDate } }] : [])
      ]
    }

    return prisma.event.findMany({
      where,
      include: {
        user: true
      },
      orderBy: {
        dateStart: 'asc'
      }
    })
  }

  async findById(id: number) {
    const event = await prisma.event.findUnique({
      where: { id },
      include: {
        user: true
      }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    return event
  }

  async create(data: Prisma.EventCreateInput) {
    // Validate that dateEnd is after dateStart
    if (data.dateStart && data.dateEnd && data.dateStart > data.dateEnd) {
      throw new Error('Event end date must be after start date')
    }

    return prisma.event.create({
      data,
      include: {
        user: true
      }
    })
  }

  async update(id: number, data: Prisma.EventUpdateInput) {
    const event = await prisma.event.findUnique({
      where: { id }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    // Validate date range if both dates are being updated
    if (
      typeof data.dateStart !== 'undefined' &&
      typeof data.dateEnd !== 'undefined' &&
      data.dateStart > data.dateEnd
    ) {
      throw new Error('Event end date must be after start date')
    }

    return prisma.event.update({
      where: { id },
      data,
      include: {
        user: true
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