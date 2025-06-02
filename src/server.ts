import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { userController } from './controllers/user.controller'
import { eventController } from './controllers/event.controller'
import { errorHandler } from './middleware/error-handler'

// Type definitions for environment variables
declare module 'fastify' {
	interface FastifyInstance {
		config: {
			PORT: number
		}
	}
}

// Create fastify instance with TypeBox
const fastify = Fastify({
	logger: true
}).withTypeProvider<TypeBoxTypeProvider>()

// Register plugins
await fastify.register(fastifyCors, {
	origin: true
})

// Register error handler
fastify.setErrorHandler(errorHandler)

// Declare routes
fastify.get('/', async () => {
	return { hello: 'world' }
})

// Register route modules
await fastify.register(userController, { prefix: '/api/users' })
await fastify.register(eventController, { prefix: '/api/events' })

// Start server
const start = async () => {
	try {
		const port = process.env.PORT ? parseInt(process.env.PORT) : 5001
		await fastify.listen({ port, host: '0.0.0.0' })
		fastify.log.info(`Server listening on http://localhost:${port}`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

start()

