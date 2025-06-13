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

// Handle connection errors
prisma.$on('query' as any, (e: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('Query:', e.query)
    console.log('Duration:', `${e.duration}ms`)
  }
})

prisma.$on('error' as any, (e: any) => {
  console.error('Prisma Error:', e)
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
