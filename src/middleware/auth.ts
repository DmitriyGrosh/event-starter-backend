import { FastifyReply, FastifyRequest } from 'fastify'

interface AuthenticatedRequest extends FastifyRequest {
  user: {
    userId: number
    iat: number
    exp: number
  }
}

export async function authenticate(request: AuthenticatedRequest, reply: FastifyReply) {
  try {
    if (!request.headers.authorization) {
      reply.code(401).send({ message: 'No token provided' })
      return
    }

    await request.jwtVerify()

    // Verify token hasn't expired
    const now = Math.floor(Date.now() / 1000)
    if (request.user.exp < now) {
      reply.code(401).send({ message: 'Token has expired' })
      return
    }

  } catch (err) {
    // Handle different types of JWT errors
    if (err instanceof Error) {
      if (err.message === 'Authorization token expired') {
        reply.code(401).send({ message: 'Token has expired' })
        return
      }
      if (err.message.includes('signature')) {
        reply.code(401).send({ message: 'Invalid token signature' })
        return
      }
    }
    
    reply.code(401).send({ message: 'Invalid token' })
  }
}
