# Event Starter Backend

A FastAPI backend for managing events and users.

## Database Migrations

This project uses Prisma for database migrations. Here are the available commands:

### Development

```bash
# Generate Prisma Client (after schema changes)
pnpm db:generate

# Create a new migration (development)
pnpm db:migrate:dev

# Check migration status
pnpm db:migrate:status

# Reset database (development only)
pnpm db:reset
```

### Production

```bash
# Deploy migrations (production)
pnpm db:migrate:deploy
```

## Creating New Migrations

When you need to make changes to the database schema:

1. Edit the `prisma/schema.prisma` file
2. Run `pnpm db:migrate:dev --name your_migration_name`
3. Review the generated migration in `prisma/migrations`
4. Commit both the schema changes and migration files

## Migration Best Practices

1. **One Change Per Migration**: Each migration should handle one logical change
2. **Descriptive Names**: Use clear, descriptive names for migrations (e.g., `add_user_role_column`)
3. **Review Changes**: Always review the generated SQL in the migration files
4. **Test Migrations**: Test migrations on a copy of production data before deploying
5. **Backup Data**: Always backup production data before running migrations

## Development Setup

```bash
# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env

# Create database
createdb events_db

# Run migrations
pnpm db:migrate:deploy

# Start development server
pnpm dev
```

## Database GUI

You can use Prisma Studio to manage your database:

```bash
pnpm db:studio
```