import { FastifyError, FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library'

export async function errorHandler(
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  request.log.error(error)

  // Handle Prisma errors
  if (error instanceof PrismaClientKnownRequestError) {
    switch (error.code) {
      case 'P2002': // Unique constraint violation
        return reply.status(409).send({
          error: 'Unique constraint violation',
          message: 'A record with this value already exists'
        })
      case 'P2025': // Record not found
        return reply.status(404).send({
          error: 'Not found',
          message: 'The requested resource was not found'
        })
      default:
        return reply.status(500).send({
          error: 'Database error',
          message: 'An unexpected database error occurred'
        })
    }
  }

  // Handle validation errors
  if (error.validation) {
    return reply.status(400).send({
      error: 'Validation error',
      message: error.message
    })
  }

  // Handle other errors
  return reply.status(error.statusCode || 500).send({
    error: error.name || 'Internal server error',
    message: error.message || 'An unexpected error occurred'
  })
} 