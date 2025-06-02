import prisma from '../db/client'
import { Prisma } from '../generated/prisma'

export class UserService {
  async findAll() {
    return prisma.user.findMany({
      include: {
        events: true
      }
    })
  }

  async findById(id: number) {
    const user = await prisma.user.findUnique({
      where: { id },
      include: {
        events: true
      }
    })

    if (!user) {
      throw new Error('User not found')
    }

    return user
  }

  async create(data: Prisma.UserCreateInput) {
    return prisma.user.create({
      data,
      include: {
        events: true
      }
    })
  }

  async update(id: number, data: Prisma.UserUpdateInput) {
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
        events: true
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