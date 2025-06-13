import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { AuthService } from '../services/auth.service'
import { authenticate } from '../middleware/auth'

const authService = new AuthService()

// Token configuration
const TOKEN_EXPIRES_IN = '7d' // 7 days

export async function authController(fastify: FastifyInstance) {
  const UserResponse = Type.Object({
    id: Type.Number(),
    name: Type.String(),
    email: Type.String(),
    createdAt: Type.String()
  })

  const RegisterBody = Type.Object({
    name: Type.String(),
    email: Type.String({ format: 'email' }),
    password: Type.String({ minLength: 6 })
  })

  const LoginBody = Type.Object({
    email: Type.String({ format: 'email' }),
    password: Type.String()
  })

  const AuthResponse = Type.Object({
    user: UserResponse,
    token: Type.String(),
    expiresIn: Type.String()
  })

  // Register new user
  fastify.post('/register', {
    schema: {
      body: RegisterBody,
      response: {
        201: AuthResponse,
        400: Type.Object({
          message: Type.String()
        }),
        500: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request, reply) => {
    try {
      fastify.log.info('Starting user registration process')
      
      const data = request.body as {
        name: string
        email: string
        password: string
      }
      
      fastify.log.info({ 
        name: data.name,
        email: data.email,
        passwordLength: data.password.length 
      }, 'Registration data received')

      const user = await authService.register(data)
      fastify.log.info({ userId: user.id }, 'User registered successfully')

      const token = await reply.jwtSign({ userId: user.id })
      fastify.log.info('JWT token generated')

      reply.code(201)
      return { 
        user, 
        token,
        expiresIn: TOKEN_EXPIRES_IN
      }
    } catch (error) {
      fastify.log.error({ 
        error,
        stack: error instanceof Error ? error.stack : undefined,
        message: error instanceof Error ? error.message : 'Unknown error'
      }, 'Registration error occurred')
      
      if (error instanceof Error) {
        reply.code(400)
        return { message: error.message }
      }
      reply.code(500)
      return { message: 'Internal server error' }
    }
  })

  // Login user
  fastify.post('/login', {
    schema: {
      body: LoginBody,
      response: {
        200: AuthResponse,
        400: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request, reply) => {
    const { email, password } = request.body as {
      email: string
      password: string
    }

    const user = await authService.login(email, password)
    const token = await reply.jwtSign({ userId: user.id })

    return { 
      user, 
      token,
      expiresIn: TOKEN_EXPIRES_IN
    }
  })

  // Get current user profile
  fastify.get('/me', {
    onRequest: [authenticate], // Add authentication middleware
    schema: {
      response: {
        200: UserResponse,
        401: Type.Object({
          message: Type.String()
        })
      }
    }
  }, async (request) => {
    // The token has been verified by the authenticate middleware
    // and userId is available in request.user
    const { userId } = request.user as { userId: number }
    
    const user = await authService.validateUser(userId)
    if (!user) {
      throw new Error('User not found')
    }

    return user
  })
}
