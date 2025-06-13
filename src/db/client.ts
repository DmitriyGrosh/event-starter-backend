import { PrismaClient } from '../generated/prisma'

// Only use WASM in development
if (process.env.NODE_ENV === 'development') {
  process.env.PRISMA_ENGINE_TYPE = 'wasm'
}

declare global {
  var prisma: PrismaClient | undefined
}

// Prevent multiple instances of Prisma Client in development
const prisma = global.prisma || new PrismaClient({
  log: process.env.NODE_ENV === 'production'
    ? ['error', 'warn']
    : ['query', 'error', 'warn'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
