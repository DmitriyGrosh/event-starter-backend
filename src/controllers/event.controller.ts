import { FastifyInstance } from 'fastify'
import { Type } from '@fastify/type-provider-typebox'
import { EventService } from '../services/event.service'
import { EventSubscriptionService } from '../services/event-subscription.service'

const eventService = new EventService()
const subscriptionService = new EventSubscriptionService()

export async function eventController(fastify: FastifyInstance) {
	const Ticket = Type.Object({
		id: Type.Number(),
		name: Type.String(),
		description: Type.Optional(Type.String()),
		price: Type.Number(),
		quantity: Type.Number(),
		eventId: Type.Number(),
		createdAt: Type.String()
	})

	const Event = Type.Object({
		id: Type.Number(),
		title: Type.String(),
		description: Type.Optional(Type.String()),
		location: Type.String(),
		dateStart: Type.String(),
		dateEnd: Type.String(),
		ownerId: Type.Number(),
		createdAt: Type.String(),
		owner: Type.Object({
			id: Type.Number(),
			name: Type.String(),
			email: Type.String()
		}),
		tickets: Type.Array(Ticket),
		_count: Type.Optional(Type.Object({
			subscribers: Type.Number()
		}))
	})

	const CreateTicketBody = Type.Object({
		name: Type.String(),
		description: Type.Optional(Type.String()),
		price: Type.Number(),
		quantity: Type.Number()
	})

	const CreateEventBody = Type.Object({
		title: Type.String(),
		description: Type.Optional(Type.String()),
		location: Type.String(),
		dateStart: Type.String(),
		dateEnd: Type.String(),
		tickets: Type.Array(CreateTicketBody)
	})

	const UpdateEventBody = Type.Partial(CreateEventBody)

	// Create event
	fastify.post('/', {
		schema: {
			tags: ['events'],
			summary: 'Create a new event',
			description: 'Create a new event with tickets (requires authentication)',
			security: [{ bearerAuth: [] }],
			body: CreateEventBody,
			response: {
				201: Event
			}
		}
	}, async (request, reply) => {
		const { userId } = request.user as { userId: number }
		const { tickets, ...eventData } = request.body as {
			title: string
			description?: string
			location: string
			dateStart: string
			dateEnd: string
			tickets: {
				name: string
				description?: string
				price: number
				quantity: number
			}[]
		}

		const data = {
			...eventData,
			ownerId: userId,
			price: 0, // Default price for the event
			tickets: {
				create: tickets
			}
		}

		const event = await eventService.create(data)
		reply.code(201)
		return event
	})

	// Update event
	fastify.patch('/:id', {
		schema: {
			tags: ['events'],
			summary: 'Update an event',
			description: 'Update an existing event (requires authentication and ownership)',
			security: [{ bearerAuth: [] }],
			params: Type.Object({
				id: Type.Number()
			}),
			body: UpdateEventBody,
			response: {
				200: Event,
				403: Type.Object({
					message: Type.String()
				}),
				404: Type.Object({
					message: Type.String()
				})
			}
		}
	}, async (request) => {
		const { id } = request.params as { id: number }
		const { userId } = request.user as { userId: number }
		const data = request.body as any

		// Check if user owns the event
		const event = await eventService.findById(id)
		if (!event) {
			throw new Error('Event not found')
		}
		if (event.ownerId !== userId) {
			throw new Error('Not authorized to update this event')
		}

		return eventService.update(id, data)
	})

	// Delete event
	fastify.delete('/:id', {
		schema: {
			tags: ['events'],
			summary: 'Delete an event',
			description: 'Delete an existing event (requires authentication and ownership)',
			security: [{ bearerAuth: [] }],
			params: Type.Object({
				id: Type.Number()
			}),
			response: {
				204: Type.Null(),
				403: Type.Object({
					message: Type.String()
				}),
				404: Type.Object({
					message: Type.String()
				})
			}
		}
	}, async (request, reply) => {
		const { id } = request.params as { id: number }
		const { userId } = request.user as { userId: number }

		// Check if user owns the event
		const event = await eventService.findById(id)
		if (!event) {
			throw new Error('Event not found')
		}
		if (event.ownerId !== userId) {
			throw new Error('Not authorized to delete this event')
		}

		await eventService.delete(id)
		reply.code(204)
	})

	// Subscribe to event
	fastify.post('/:id/subscribe', {
		schema: {
			tags: ['events'],
			summary: 'Subscribe to an event',
			description: 'Subscribe the authenticated user to an event',
			security: [{ bearerAuth: [] }],
			params: Type.Object({
				id: Type.Number()
			}),
			response: {
				200: Type.Object({
					message: Type.String()
				}),
				400: Type.Object({
					message: Type.String()
				}),
				404: Type.Object({
					message: Type.String()
				})
			}
		}
	}, async (request) => {
		const { id } = request.params as { id: number }
		const { userId } = request.user as { userId: number }

		await subscriptionService.subscribe(userId, id)
		return { message: 'Successfully subscribed to event' }
	})

	// Unsubscribe from event
	fastify.delete('/:id/subscribe', {
		schema: {
			tags: ['events'],
			summary: 'Unsubscribe from an event',
			description: 'Unsubscribe the authenticated user from an event',
			security: [{ bearerAuth: [] }],
			params: Type.Object({
				id: Type.Number()
			}),
			response: {
				200: Type.Object({
					message: Type.String()
				}),
				400: Type.Object({
					message: Type.String()
				}),
				404: Type.Object({
					message: Type.String()
				})
			}
		}
	}, async (request) => {
		const { id } = request.params as { id: number }
		const { userId } = request.user as { userId: number }

		await subscriptionService.unsubscribe(userId, id)
		return { message: 'Successfully unsubscribed from event' }
	})

	// Get event subscribers
	fastify.get('/:id/subscribers', {
		schema: {
			params: Type.Object({
				id: Type.Number()
			}),
			response: {
				200: Type.Array(Type.Object({
					user: Type.Object({
						id: Type.Number(),
						name: Type.String(),
						email: Type.String(),
						createdAt: Type.String()
					})
				})),
				404: Type.Object({
					message: Type.String()
				})
			}
		}
	}, async (request) => {
		const { id } = request.params as { id: number }
		return subscriptionService.getEventSubscribers(id)
	})
}

