import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifyRateLimit from '@fastify/rate-limit'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import { userController } from './controllers/user.controller'
import { eventController } from './controllers/event.controller'
import { authController } from './controllers/auth.controller'
import { errorHandler } from './middleware/error-handler'
import { authenticate } from './middleware/auth'

// Type definitions for environment variables
declare module 'fastify' {
	interface FastifyInstance {
		config: {
			PORT: number
		}
	}
}

// Add JWT types
declare module '@fastify/jwt' {
	interface FastifyJWT {
		payload: {
			userId: number
		}
		user: {
			userId: number
			iat: number
			exp: number
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

// Add rate limiting
await fastify.register(fastifyRateLimit, {
	global: false,
	max: 100, // Default max requests per timeWindow
	timeWindow: '1 minute'
})

// Configure JWT
await fastify.register(fastifyJwt, {
	secret: process.env.JWT_SECRET || 'your-secret-key' // In production, use a proper secret from env
})

// Register error handler
fastify.setErrorHandler(errorHandler)

// Register route modules with rate limiting for auth endpoints
await fastify.register(async (fastify) => {
	// Add stricter rate limiting for auth endpoints
	fastify.addHook('onRequest', fastify.rateLimit({
		max: 5, // 5 attempts
		timeWindow: '15 minutes',
		errorResponseBuilder: () => ({
			statusCode: 429,
			error: 'Too Many Requests',
			message: 'Too many login attempts, please try again later'
		})
	}))

	await fastify.register(authController, { prefix: '/api/auth' })
})

// Protected routes
fastify.register(async (fastify) => {
	// Add authentication to all routes in this context
	fastify.addHook('onRequest', authenticate)

	// Register protected route modules
	await fastify.register(userController, { prefix: '/api/users' })
	await fastify.register(eventController, { prefix: '/api/events' })
})

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

