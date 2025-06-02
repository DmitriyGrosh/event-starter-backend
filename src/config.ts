export const config = {
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://postgres:postgres@localhost:5432/events_db',
    PORT: process.env.PORT ? parseInt(process.env.PORT) : 5000
} 