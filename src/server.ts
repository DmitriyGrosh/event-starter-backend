import { config } from 'dotenv'
config()

import Fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import fastifyJwt from '@fastify/jwt'
import fastifyRateLimit from '@fastify/rate-limit'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'
import fastifySwagger from '@fastify/swagger'
import fastifySwaggerUi from '@fastify/swagger-ui'
import { userController } from './controllers/user.controller'
import { authController } from './controllers/auth.controller'
import { errorHandler } from './middleware/error-handler'
import { authenticate } from './middleware/auth'
import { ticketController } from "./controllers/ticket.controller"
import { publicTagController } from "./controllers/public-tag.controller"
import { publicEventController } from './controllers/public-event.controller'
import { notificationController } from './controllers/notification.controller'
import { eventSubscriptionController } from '@/controllers/event-subscription.controller'

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

// Add health check endpoint
fastify.get('/health', async () => 'ok')

// Add Swagger documentation
await fastify.register(fastifySwagger, {
	openapi: {
		info: {
			title: 'Event Management API',
			description: 'API for managing events, tickets, and user registrations',
			version: '1.0.0'
		},
		servers: [{
			url: `http://localhost:${process.env.PORT}`,
			description: 'Development server'
		}],
		components: {
			securitySchemes: {
				bearerAuth: {
					type: 'http',
					scheme: 'bearer',
					bearerFormat: 'JWT'
				}
			}
		}
	}
})

// Add Swagger UI
await fastify.register(fastifySwaggerUi, {
	routePrefix: '/docs',
	uiConfig: {
		docExpansion: 'list',
		deepLinking: false
	},
	uiHooks: {
		onRequest: function (_request, _reply, next) {
			next()
		},
		preHandler: function (_request,_reply, next) {
			next()
		}
	},
	staticCSP: true,
	transformStaticCSP: (header) => header
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

// Register public routes
await fastify.register(publicEventController, { prefix: '/api/events' })
await fastify.register(publicTagController, { prefix: '/api/tags' })

// Register route modules with rate limiting for auth endpoints
await fastify.register(async (fastify) => {
	// Add stricter rate limiting for auth endpoints
	fastify.addHook('onRequest', fastify.rateLimit({
		max: 50, // 5 attempts
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
	await fastify.register(ticketController, { prefix: '/api/tickets' })
	await fastify.register(notificationController, { prefix: '/api/notifications' })
	await fastify.register(eventSubscriptionController, { prefix: '/api/subscriptions' })
})

// Start server
const start = async () => {
	try {
		console.log('==========>process.env', process.env);
		const port = parseInt(process.env.PORT ?? "5000")
		await fastify.listen({ port, host: '0.0.0.0' })
		fastify.log.info(`Server listening on http://localhost:${port}`)
		fastify.log.info(`API Documentation available at http://localhost:${port}/docs`)
	} catch (err) {
		fastify.log.error(err)
		process.exit(1)
	}
}

start()

