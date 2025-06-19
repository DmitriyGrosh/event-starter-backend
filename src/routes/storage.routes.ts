import { FastifyInstance } from 'fastify'
import { storageService } from '../services/storage.service'

export default async function storageRoutes(fastify: FastifyInstance) {
  // Test storage connection endpoint
  fastify.get('/test', {
    schema: {
      tags: ['storage'],
      summary: 'Test storage connection',
      description: 'Test the connection to Selectel storage',
      response: {
        200: {
          type: 'object',
          properties: {
            success: { type: 'boolean' },
            error: { type: 'string' },
            details: { type: 'object' }
          }
        }
      }
    }
  }, async (request, reply) => {
    try {
      const result = await storageService.testConnection()
      return result
    } catch (error) {
      console.error('Error testing storage connection:', error)
      return reply.code(500).send({ 
        success: false, 
        error: 'Failed to test storage connection',
        details: { message: error instanceof Error ? error.message : 'Unknown error' }
      })
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
