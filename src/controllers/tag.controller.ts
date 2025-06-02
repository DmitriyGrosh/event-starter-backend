import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import prisma from '../db/client'

export async function tagController(fastify: FastifyInstance) {
  const Tag = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    description: Type.Optional(Type.String()),
    createdAt: Type.String(),
    _count: Type.Optional(Type.Object({
      events: Type.Number()
    }))
  })

  // Get all tags with event counts
  fastify.get('/', {
    schema: {
      response: {
        200: Type.Array(Tag)
      }
    }
  }, async () => {
    return prisma.tag.findMany({
      include: {
        _count: {
          select: {
            events: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    })
  })

  // Get popular tags (sorted by event count)
  fastify.get('/popular', {
    schema: {
      querystring: Type.Object({
        limit: Type.Optional(Type.Number())
      }),
      response: {
        200: Type.Array(Tag)
      }
    }
  }, async (request) => {
    const { limit = 10 } = request.query as { limit?: number }

    return prisma.tag.findMany({
      include: {
        _count: {
          select: {
            events: true
          }
        }
      },
      orderBy: {
        events: {
          _count: 'desc'
        }
      },
      take: limit
    })
  })

  // Search tags
  fastify.get('/search', {
    schema: {
      querystring: Type.Object({
        q: Type.String(),
        limit: Type.Optional(Type.Number())
      }),
      response: {
        200: Type.Array(Tag)
      }
    }
  }, async (request) => {
    const { q, limit = 10 } = request.query as { q: string; limit?: number }

    return prisma.tag.findMany({
      where: {
        name: {
          contains: q.toLowerCase(),
          mode: 'insensitive'
        }
      },
      include: {
        _count: {
          select: {
            events: true
          }
        }
      },
      orderBy: {
        events: {
          _count: 'desc'
        }
      },
      take: limit
    })
  })

  // Get events by tag
  fastify.get('/:name/events', {
    schema: {
      params: Type.Object({
        name: Type.String()
      }),
      response: {
        200: Type.Array(Type.Object({
          id: Type.Number(),
          title: Type.String(),
          description: Type.Optional(Type.String()),
          location: Type.String(),
          dateStart: Type.String(),
          dateEnd: Type.String(),
          owner: Type.Object({
            id: Type.Number(),
            name: Type.String(),
            email: Type.String()
          })
        })),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { name } = request.params as { name: string }

    const tag = await prisma.tag.findFirst({
      where: {
        name: {
          equals: name.toLowerCase(),
          mode: 'insensitive'
        }
      },
      include: {
        events: {
          include: {
            event: {
              include: {
                owner: {
                  select: {
                    id: true,
                    name: true,
                    email: true
                  }
                }
              }
            }
          }
        }
      }
    })

    if (!tag) {
      throw new Error('Tag not found')
    }

    return tag.events.map(et => et.event)
  })

  // Get tag suggestions based on partial input
  fastify.get('/suggest', {
    schema: {
      querystring: Type.Object({
        q: Type.String(),
        limit: Type.Optional(Type.Number())
      }),
      response: {
        200: Type.Array(Type.Object({
          name: Type.String(),
          count: Type.Number()
        }))
      }
    }
  }, async (request) => {
    const { q, limit = 5 } = request.query as { q: string; limit?: number }

    const tags = await prisma.tag.findMany({
      where: {
        name: {
          startsWith: q.toLowerCase(),
          mode: 'insensitive'
        }
      },
      include: {
        _count: {
          select: {
            events: true
          }
        }
      },
      orderBy: [
        {
          events: {
            _count: 'desc'
          }
        },
        {
          name: 'asc'
        }
      ],
      take: limit
    })

    return tags.map(tag => ({
      name: tag.name,
      count: tag._count.events
    }))
  })
} 