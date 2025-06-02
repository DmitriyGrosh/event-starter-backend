import prisma from '../db/client'

export class EventService {
  async findAll(filters?: {
    userId?: number
    search?: string
    fromDate?: Date
    toDate?: Date
    tags?: string[]
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

    if (filters?.tags && filters.tags.length > 0) {
      where.tags = {
        some: {
          tag: {
            name: {
              in: filters.tags.map(tag => tag.toLowerCase())
            }
          }
        }
      }
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
        tickets: true,
        tags: {
          include: {
            tag: true
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
        tickets: true,
        tags: {
          include: {
            tag: true
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
    location: string
    dateStart: string
    dateEnd: string
    ownerId: number
    tickets: {
      create: {
        name: string
        description?: string
        price: number
        quantity: number
      }[]
    }
    tags?: string[]
  }) {
    return prisma.$transaction(async (tx) => {
      // Handle tags first if provided
      let tagIds: number[] = []
      if (data.tags && data.tags.length > 0) {
        const lowercaseTags = data.tags.map(tag => tag.toLowerCase())

        // Find existing tags
        const existingTags = await tx.tag.findMany({
          where: {
            name: {
              in: lowercaseTags
            }
          }
        })

        const existingTagNames = existingTags.map(tag => tag.name)
        const newTagNames = lowercaseTags.filter(tag => !existingTagNames.includes(tag))

        // Create new tags
        if (newTagNames.length > 0) {
          await tx.tag.createMany({
            data: newTagNames.map(name => ({
              name,
              description: null
            })),
            skipDuplicates: true
          })
        }

        // Get all tag IDs
        const allTags = await tx.tag.findMany({
          where: {
            name: {
              in: lowercaseTags
            }
          }
        })
        tagIds = allTags.map(tag => tag.id)
      }

      // Create event
      const event = await tx.event.create({
        data: {
          title: data.title,
          description: data.description,
          location: data.location,
          dateStart: data.dateStart,
          dateEnd: data.dateEnd,
          ownerId: data.ownerId,
          tickets: data.tickets,
          tags: tagIds.length > 0 ? {
            create: tagIds.map(tagId => ({
              tagId
            }))
          } : undefined
        },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          tickets: true,
          tags: {
            include: {
              tag: true
            }
          },
          _count: {
            select: {
              subscribers: true
            }
          }
        }
      })

      return event
    })
  }

  async update(id: number, data: Partial<{
    title: string
    description?: string
    location: string
    dateStart: string
    dateEnd: string
    tags?: string[]
  }>) {
    const event = await prisma.event.findUnique({
      where: { id }
    })

    if (!event) {
      throw new Error('Event not found')
    }

    return prisma.$transaction(async (tx) => {
      // Handle tags first if provided
      let tagIds: number[] = []
      if (data.tags && data.tags.length > 0) {
        const lowercaseTags = data.tags.map(tag => tag.toLowerCase())

        // Find existing tags
        const existingTags = await tx.tag.findMany({
          where: {
            name: {
              in: lowercaseTags
            }
          }
        })

        const existingTagNames = existingTags.map(tag => tag.name)
        const newTagNames = lowercaseTags.filter(tag => !existingTagNames.includes(tag))

        // Create new tags
        if (newTagNames.length > 0) {
          await tx.tag.createMany({
            data: newTagNames.map(name => ({
              name,
              description: null
            })),
            skipDuplicates: true
          })
        }

        // Get all tag IDs
        const allTags = await tx.tag.findMany({
          where: {
            name: {
              in: lowercaseTags
            }
          }
        })
        tagIds = allTags.map(tag => tag.id)

        // Delete existing tag connections
        await tx.eventTag.deleteMany({
          where: { eventId: id }
        })
      }

      // Update event
      const updatedEvent = await tx.event.update({
        where: { id },
        data: {
          title: data.title,
          description: data.description,
          location: data.location,
          dateStart: data.dateStart,
          dateEnd: data.dateEnd,
          tags: tagIds.length > 0 ? {
            create: tagIds.map(tagId => ({
              tagId
            }))
          } : undefined
        },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          tickets: true,
          tags: {
            include: {
              tag: true
            }
          },
          _count: {
            select: {
              subscribers: true
            }
          }
        }
      })

      return updatedEvent
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
      where: { id },
      include: {
        tickets: true
      }
    })
  }

  async findAllPaginated(options: {
    page: number
    limit: number
    sortBy: 'dateStart' | 'dateEnd' | 'title' | 'createdAt'
    order: 'asc' | 'desc'
  }) {
    const skip = (options.page - 1) * options.limit
    const take = options.limit

    const [total, events] = await Promise.all([
      prisma.event.count(),
      prisma.event.findMany({
        skip,
        take,
        orderBy: {
          [options.sortBy]: options.order
        },
        include: {
          owner: {
            select: {
              id: true,
              name: true,
              email: true
            }
          },
          tickets: true,
          tags: {
            include: {
              tag: true
            }
          },
          _count: {
            select: {
              subscribers: true
            }
          }
        }
      })
    ])

    const pageCount = Math.ceil(total / options.limit)

    return {
      events,
      pagination: {
        total,
        page: options.page,
        pageSize: options.limit,
        pageCount
      }
    }
  }
}
