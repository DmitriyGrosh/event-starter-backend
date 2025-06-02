import { PrismaClient } from '../generated/prisma'

// Set Prisma to use WASM
process.env.PRISMA_ENGINE_TYPE = 'wasm'

declare global {
  var prisma: PrismaClient | undefined
}

// Prevent multiple instances of Prisma Client in development
const prisma = global.prisma || new PrismaClient({
  log: ['query', 'error', 'warn']
})

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma
}

export default prisma
