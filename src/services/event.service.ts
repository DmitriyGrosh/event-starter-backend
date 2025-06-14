import prisma from '../db/client'

export class EventService {
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
    price: number
    ownerId: number
    imageUrl?: string
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
    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: data.ownerId }
    })

    if (!user) {
      throw new Error(`User with ID ${data.ownerId} not found`)
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
      }

      // Create event
      const event = await tx.event.create({
        data: {
          title: data.title,
          description: data.description,
          location: data.location,
          dateStart: data.dateStart,
          dateEnd: data.dateEnd,
          price: data.price,
          ownerId: data.ownerId,
          imageUrl: data.imageUrl,
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
    price?: number
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
          price: data.price,
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
    filters?: {
      search?: string
      fromDate?: Date
      toDate?: Date
      tags?: string[]
      minPrice?: number
      maxPrice?: number
      location?: string
    }
  }) {
    const where: any = {}

    if (options.filters?.search) {
      where.OR = [
        { title: { contains: options.filters.search, mode: 'insensitive' } },
        { description: { contains: options.filters.search, mode: 'insensitive' } }
      ]
    }

    if (options.filters?.fromDate) {
      where.dateStart = { gte: options.filters.fromDate }
    }

    if (options.filters?.toDate) {
      where.dateEnd = { lte: options.filters.toDate }
    }

    if (options.filters?.minPrice != null) {
      where.price = { ...where.price, gte: options.filters.minPrice }
    }

    if (options.filters?.maxPrice != null) {
      where.price = { ...where.price, lte: options.filters.maxPrice }
    }

    if (options.filters?.location) {
      where.location = { contains: options.filters.location, mode: 'insensitive' }
    }

    if (options.filters?.tags && options.filters.tags.length > 0) {
      where.tags = {
        some: {
          tag: {
            name: {
              in: options.filters.tags.map(tag => tag.toLowerCase())
            }
          }
        }
      }
    }

    const [events, total] = await Promise.all([
      prisma.event.findMany({
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
        },
        skip: (options.page - 1) * options.limit,
        take: options.limit,
        orderBy: {
          [options.sortBy]: options.order
        }
      }),
      prisma.event.count({ where })
    ])

    return {
      events,
      pagination: {
        total,
        page: options.page,
        pageSize: options.limit,
        pageCount: Math.ceil(total / options.limit)
      }
    }
  }
}
