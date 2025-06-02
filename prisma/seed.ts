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
        date: new Date(now.getFullYear(), now.getMonth() + 1, 15), // Next month
        userId: users[0].id,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Community Meetup',
        description: 'Monthly community gathering to discuss local initiatives',
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 7), // Next week
        userId: users[1].id,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Workshop: Web Development',
        description: 'Hands-on workshop covering modern web development practices',
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14), // Two weeks from now
        userId: users[0].id,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Networking Event',
        description: 'Evening of networking and relationship building',
        date: new Date(now.getFullYear(), now.getMonth(), now.getDate() + 21), // Three weeks from now
        userId: users[2].id,
      },
    }),
    prisma.event.create({
      data: {
        title: 'Charity Fundraiser',
        description: 'Annual fundraising event for local charities',
        date: new Date(now.getFullYear(), now.getMonth() + 2, 1), // Two months from now
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
