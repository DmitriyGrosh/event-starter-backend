import { FastifyInstance } from 'fastify'
import { storageService } from '../services/storage.service'
import multipart from '@fastify/multipart'

export default async function storageRoutes(fastify: FastifyInstance) {
  // Register multipart support
  await fastify.register(multipart, {
    limits: {
      fileSize: storageService.getMaxFileSize() // 5MB limit
    }
  })

  fastify.post('/upload', {
    schema: {
      tags: ['storage'],
      summary: 'Upload an image file',
      description: 'Upload an image file directly to storage',
      security: [{ bearerAuth: [] }],
      consumes: ['multipart/form-data'],
      response: {
        200: {
          type: 'object',
          properties: {
            fileUrl: { type: 'string' }
          }
        }
      }
    }
  }, async (request, reply) => {
    try {
      const data = await request.file()
      
      if (!data) {
        return reply.code(400).send({ error: 'No file uploaded' })
      }

      if (!storageService.isAllowedFileType(data.mimetype)) {
        return reply.code(400).send({
          error: 'Invalid file type. Allowed types are: image/jpeg, image/png, image/webp'
        })
      }

      const buffer = await data.toBuffer()
      const fileUrl = await storageService.uploadFile(buffer, data.mimetype)

      return { fileUrl }
    } catch (error) {
      console.error('Error uploading file:', error)
      return reply.code(500).send({ error: 'Error uploading file' })
    }
  })
}
