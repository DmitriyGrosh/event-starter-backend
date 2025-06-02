import { PrismaClient } from '../src/generated/prisma'

const prisma = new PrismaClient()

async function main() {
  // Clean up existing data
  await prisma.event.deleteMany()
  await prisma.user.deleteMany()

  // Create users
  const users = await Promise.all([
    prisma.user.create({
      data: {
        name: 'John Doe',
        email: 'john@example.com',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Jane Smith',
        email: 'jane@example.com',
      },
    }),
    prisma.user.create({
      data: {
        name: 'Bob Wilson',
        email: 'bob@example.com',
      },
    }),
  ])

  // Create events
  const now = new Date()
  const events = await Promise.all([
    prisma.event.create({
      data: {
        title: 'Tech Conference 2024',
        description: 'Annual technology conference featuring the latest innovations',
        dateStart: new Date(now.getFullYear(), now.getMonth() + 1, 15, 9, 0), // Next month, 9 AM
        dateEnd: new Date(now.getFullYear(), now.getMonth() + 1, 17, 18, 0), // Next month, 6 PM (3-day conference)
        userId: users[0].id,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Community Meetup',
        description: 'Monthly community gathering to discuss local initiatives',
        dateStart: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 14, 0), // Next week, 2 PM
        dateEnd: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7, 16, 0), // Next week, 4 PM
        userId: users[1].id,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Workshop: Web Development',
        description: 'Hands-on workshop covering modern web development practices',
        dateStart: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14, 10, 0), // Two weeks from now, 10 AM
        dateEnd: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14, 17, 0), // Two weeks from now, 5 PM
        userId: users[0].id,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Networking Event',
        description: 'Evening of networking and relationship building',
        dateStart: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 21, 18, 0), // Three weeks from now, 6 PM
        dateEnd: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 21, 21, 0), // Three weeks from now, 9 PM
        userId: users[2].id,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Charity Fundraiser',
        description: 'Annual fundraising event for local charities',
        dateStart: new Date(now.getFullYear(), now.getMonth() + 2, 1, 17, 0), // Two months from now, 5 PM
        dateEnd: new Date(now.getFullYear(), now.getMonth() + 2, 1, 23, 0), // Two months from now, 11 PM
        userId: users[1].id,
      },
    }),
  ])

  console.log('Seed data created:')
  console.log('Users:', users.length)
  console.log('Events:', events.length)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
