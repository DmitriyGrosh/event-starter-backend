import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { UserService } from '../services/user.service'
import { Prisma } from '../generated/prisma'

const userService = new UserService()

export async function userController(fastify: FastifyInstance) {
  const User = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    email: Type.String({ format: 'email' }),
    createdAt: Type.String(),
    events: Type.Array(Type.Object({
      id: Type.Number(),
      title: Type.String(),
      description: Type.Optional(Type.String()),
      dateStart: Type.String(),
      dateEnd: Type.String(),
      userId: Type.Number(),
      createdAt: Type.String()
    }))
  })

  const CreateUserBody = Type.Object({
    name: Type.String(),
    email: Type.String({ format: 'email' })
  })

  const UpdateUserBody = Type.Partial(CreateUserBody)

  // Get all users
  fastify.get('/', {
    schema: {
      response: {
        200: Type.Array(User)
      }
    }
  }, async () => {
    return userService.findAll()
  })

  // Get user by ID
  fastify.get('/:id', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        200: User,
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { id } = request.params as { id: number }
    return userService.findById(id)
  })

  // Create user
  fastify.post('/', {
    schema: {
      body: CreateUserBody,
      response: {
        201: User,
        400: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request, reply) => {
    const data = request.body as Prisma.UserCreateInput
    const user = await userService.create(data)
    reply.code(201)
    return user
  })

  // Update user
  fastify.patch('/:id', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      body: UpdateUserBody,
      response: {
        200: User,
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    const { id } = request.params as { id: number }
    const data = request.body as Prisma.UserUpdateInput
    return userService.update(id, data)
  })

  // Delete user
  fastify.delete('/:id', {
    schema: {
      params: Type.Object({
        id: Type.Number()
      }),
      response: {
        204: Type.Null(),
        404: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request, reply) => {
    const { id } = request.params as { id: number }
    await userService.delete(id)
    reply.code(204)
  })
} 