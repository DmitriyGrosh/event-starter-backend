import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { UserService } from '../services/user.service'

const userService = new UserService()

export async function userController(fastify: FastifyInstance) {
  const Event = Type.Object({
    id: Type.Number(),
    title: Type.String(),
    description: Type.Optional(Type.String()),
    dateStart: Type.String(),
    dateEnd: Type.String(),
    ownerId: Type.Number(),
    createdAt: Type.String()
  })

  const User = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    email: Type.String(),
    createdAt: Type.String(),
    ownedEvents: Type.Array(Event),
    subscribedEvents: Type.Array(Type.Object({
      event: Event
    }))
  })

  const CreateUserBody = Type.Object({
    name: Type.String(),
    email: Type.String({ format: 'email' }),
    password: Type.String()
  })

  const UpdateUserBody = Type.Partial(CreateUserBody)

  // Get all users with their events
  fastify.get('/', {
    schema: {
      response: {
        200: Type.Array(User)
      }
    }
  }, async () => {
    const users = await userService.findAll()
    return users.map(user => ({
      ...user,
      subscribedEvents: user.eventSubscriptions
    }))
  })

  // Get user by ID with their events
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
    const user = await userService.findById(id)

    return {
      ...user,
      subscribedEvents: user.eventSubscriptions
    }
  })

  // Get current user's events
  fastify.get('/me/events', {
    schema: {
      response: {
        200: Type.Object({
          ownedEvents: Type.Array(Event),
          subscribedEvents: Type.Array(Type.Object({
            event: Event
          }))
        })
      }
    }
  }, async (request) => {
    const { userId } = request.user as { userId: number };
    console.log('==========>', userId);
    const user = await userService.findById(userId)

    if (!user) {
      throw new Error('User not found')
    }

    return {
      ownedEvents: user.ownedEvents,
      subscribedEvents: user.eventSubscriptions
    }
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
    const data = request.body as {
      name: string
      email: string
      password: string
    }

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
    const { userId } = request.user as { userId: number }

    // Users can only update their own profile
    if (id !== userId) {
      throw new Error('Not authorized to update this user')
    }

    const data = request.body as Partial<{
      name: string
      email: string
      password: string
    }>

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
    const { userId } = request.user as { userId: number }

    // Users can only delete their own profile
    if (id !== userId) {
      throw new Error('Not authorized to delete this user')
    }

    await userService.delete(id)
    reply.code(204)
  })
}
