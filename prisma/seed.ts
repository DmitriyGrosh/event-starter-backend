import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()

  // Clean up existing data
  console.log('Cleaning up existing data...')
  await prisma.ticketPurchase.deleteMany()
  await prisma.ticket.deleteMany()
  await prisma.eventSubscription.deleteMany()
  await prisma.event.deleteMany()
  await prisma.user.deleteMany()
  console.log('Cleanup complete')

  // Hash password for users
  const password = await bcrypt.hash('password123', 10)

  // Create users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: "John Doe",
        email: "john@example.com",
        password
      }
    }),
    prisma.user.create({
      data: {
        name: "Jane Smith",
        email: "jane@example.com",
        password
      }
    })
  ])

  // Create events owned by John
  const johnsEvents = await Promise.all([
    prisma.event.create({
      data: {
        title: "Tech Conference",
        description: "Annual technology conference",
        location: "San Francisco Convention Center",
        dateStart: new Date('2024-03-15T09:00:00Z'),
        dateEnd: new Date('2024-03-17T18:00:00Z'),
        ownerId: users[0].id,
        tickets: {
          create: [
            {
              name: "Early Bird",
              description: "Limited early bird tickets",
              price: 199.99,
              quantity: 100
            },
            {
              name: "Regular",
              description: "Standard conference ticket",
              price: 299.99,
              quantity: 200
            },
            {
              name: "VIP",
              description: "VIP access with exclusive workshops",
              price: 499.99,
              quantity: 50
            }
          ]
        }
      }
    }),
    prisma.event.create({
      data: {
        title: "Coding Workshop",
        description: "Learn to code in a day",
        location: "Tech Hub Downtown",
        dateStart: new Date('2024-04-01T10:00:00Z'),
        dateEnd: new Date('2024-04-01T17:00:00Z'),
        ownerId: users[0].id,
        tickets: {
          create: [
            {
              name: "Workshop Ticket",
              description: "Full day workshop access",
              price: 149.99,
              quantity: 30
            }
          ]
        }
      }
    })
  ])

  // Create events owned by Jane
  const janesEvents = await Promise.all([
    prisma.event.create({
      data: {
        title: "Design Meetup",
        description: "UI/UX design best practices",
        location: "Creative Space Co-working",
        dateStart: new Date('2024-03-20T14:00:00Z'),
        dateEnd: new Date('2024-03-20T17:00:00Z'),
        ownerId: users[1].id,
        tickets: {
          create: [
            {
              name: "Standard Entry",
              description: "Access to meetup and networking",
              price: 25.00,
              quantity: 50
            },
            {
              name: "Premium",
              description: "Includes 1-on-1 portfolio review",
              price: 75.00,
              quantity: 10
            }
          ]
        }
      }
    })
  ])

  // Create some subscriptions
  await Promise.all([
    // Jane subscribes to John's Tech Conference
    prisma.eventSubscription.create({
      data: {
        userId: users[1].id,
        eventId: johnsEvents[0].id
      }
    }),
    // John subscribes to Jane's Design Meetup
    prisma.eventSubscription.create({
      data: {
        userId: users[0].id,
        eventId: janesEvents[0].id
      }
    })
  ])

  // Create some ticket purchases
  await Promise.all([
    // Jane buys VIP ticket to Tech Conference
    prisma.ticketPurchase.create({
      data: {
        quantity: 1,
        totalPaid: 499.99,
        status: "COMPLETED",
        ticketId: (await prisma.ticket.findFirst({
          where: { 
            eventId: johnsEvents[0].id,
            name: "VIP"
          }
        }))!.id,
        userId: users[1].id
      }
    }),
    // John buys Premium ticket to Design Meetup
    prisma.ticketPurchase.create({
      data: {
        quantity: 1,
        totalPaid: 75.00,
        status: "COMPLETED",
        ticketId: (await prisma.ticket.findFirst({
          where: {
            eventId: janesEvents[0].id,
            name: "Premium"
          }
        }))!.id,
        userId: users[0].id
      }
    })
  ])

  console.log('Seed data created successfully')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
