import prisma from '../db/client'

export class UserService {
  async findAll() {
    return prisma.user.findMany({
      include: {
        ownedEvents: true,
        eventSubscriptions: {
          include: {
            event: true
          }
        }
      }
    })
  }

  async findById(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        ownedEvents: true,
        eventSubscriptions: {
          include: {
            event: true
          }
        }
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async create(data: {
    name: string
    email: string
    password: string
  }) {
    return prisma.user.create({
      data,
      include: {
        ownedEvents: true,
        eventSubscriptions: {
          include: {
            event: true
          }
        }
      }
    })
  }

  async update(id: number, data: Partial<{
    name: string
    email: string
    password: string
  }>) {
    const user = await prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new Error('User not found')
    }

    return prisma.user.update({
      where: { id },
      data,
      include: {
        ownedEvents: true,
        eventSubscriptions: {
          include: {
            event: true
          }
        }
      }
    })
  }

  async delete(id: number) {
    const user = await prisma.user.findUnique({
      where: { id }
    })

    if (!user) {
      throw new Error('User not found')
    }

    return prisma.user.delete({
      where: { id }
    })
  }
}
