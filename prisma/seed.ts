import { PrismaClient } from '../src/generated/prisma'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  await prisma.$connect()

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
        dateStart: new Date('2024-03-15T09:00:00Z'),
        dateEnd: new Date('2024-03-17T18:00:00Z'),
        ownerId: users[0].id
      }
    }),
    prisma.event.create({
      data: {
        title: "Coding Workshop",
        description: "Learn to code in a day",
        dateStart: new Date('2024-04-01T10:00:00Z'),
        dateEnd: new Date('2024-04-01T17:00:00Z'),
        ownerId: users[0].id
      }
    })
  ])

  // Create events owned by Jane
  const janesEvents = await Promise.all([
    prisma.event.create({
      data: {
        title: "Design Meetup",
        description: "UI/UX design best practices",
        dateStart: new Date('2024-03-20T14:00:00Z'),
        dateEnd: new Date('2024-03-20T17:00:00Z'),
        ownerId: users[1].id
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
