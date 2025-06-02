import prisma from '../db/client'

export class TagService {
  async findAll() {
    return prisma.tag.findMany({
      include: {
        _count: {
          select: {
            events: true
          }
        }
      }
    })
  }

  async findOrCreate(tags: string[]) {
    const lowercaseTags = tags.map(tag => tag.toLowerCase())
    
    // Find existing tags
    const existingTags = await prisma.tag.findMany({
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
      await prisma.tag.createMany({
        data: newTagNames.map(name => ({
          name,
          description: null
        })),
        skipDuplicates: true
      })
    }

    // Return all tags (existing + newly created)
    return prisma.tag.findMany({
      where: {
        name: {
          in: lowercaseTags
        }
      }
    })
  }

  async connectTagsToEvent(eventId: number, tagIds: number[]) {
    return prisma.$transaction(async (tx) => {
      // Delete existing connections
      await tx.eventTag.deleteMany({
        where: {
          eventId
        }
      })

      // Create new connections
      await tx.eventTag.createMany({
        data: tagIds.map(tagId => ({
          eventId,
          tagId
        }))
      })

      // Return updated event with tags
      return tx.event.findUnique({
        where: { id: eventId },
        include: {
          tags: {
            include: {
              tag: true
            }
          }
        }
      })
    })
  }
} 