import { Prisma } from '../generated/prisma'
import prisma from '../db/client'
import crypto from 'crypto'

export class AuthService {
  private hashPassword(password: string): string {
    return crypto.createHash('sha256').update(password).digest('hex')
  }

  async register(data: { name: string; email: string; password: string }) {
    try {
      console.log('Checking for existing user with email:', data.email)
      const existingUser = await prisma.user.findUnique({
        where: { email: data.email }
      })

      if (existingUser) {
        console.log('User already exists with email:', data.email)
        throw new Error('User with this email already exists')
      }

      console.log('Hashing password')
      const hashedPassword = this.hashPassword(data.password)
      console.log('Password hashed successfully')

      console.log('Creating new user')
      const user = await prisma.user.create({
        data: {
          ...data,
          password: hashedPassword
        }
      })

      console.log('User created successfully with ID:', user.id)
      // Don't send password in response
      const { password, ...userWithoutPassword } = user
      return userWithoutPassword
    } catch (error) {
      console.error('Registration error:', error)
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Handle Prisma-specific errors
        if (error.code === 'P2002') {
          throw new Error('A user with this email already exists')
        }
        throw new Error('Database error occurred')
      }
      if (error instanceof Error) {
        throw error
      }
      throw new Error('An unexpected error occurred during registration')
    }
  }

  async login(email: string, password: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { email }
      })

      if (!user) {
        throw new Error('Invalid credentials')
      }

      const hashedPassword = this.hashPassword(password)
      const isPasswordValid = hashedPassword === user.password

      if (!isPasswordValid) {
        throw new Error('Invalid credentials')
      }

      // Don't send password in response
      const { password: _, ...userWithoutPassword } = user
      return userWithoutPassword
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('An unexpected error occurred during login')
    }
  }

  async validateUser(userId: number) {
    try {
      const user = await prisma.user.findUnique({
        where: { id: userId }
      })

      if (!user) {
        throw new Error('User not found')
      }

      const { password, ...userWithoutPassword } = user
      return userWithoutPassword
    } catch (error) {
      if (error instanceof Error) {
        throw error
      }
      throw new Error('An unexpected error occurred while validating user')
    }
  }
}
