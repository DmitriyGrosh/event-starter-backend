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

## Storage Configuration (Selectel)

This project uses Selectel for file storage. You need to configure the following environment variables:

### Required Environment Variables

- `SELECTEL_ACCESS_KEY` - Your Selectel access key
- `SELECTEL_SECRET_KEY` - Your Selectel secret key  
- `SELECTEL_BUCKET` - Your Selectel bucket name
- `SELECTEL_ENDPOINT` - Selectel S3 endpoint (default: `https://s3.ru-7.storage.selcloud.ru`)
- `SELECTEL_PUBLIC_URL` - Public URL for accessing files (e.g., `https://1ca1de13-42fa-4286-bb8c-9c20e603e728.selstorage.ru`)

### Important Notes

- The `SELECTEL_PUBLIC_URL` is different from the S3 endpoint and is used for generating public URLs to access uploaded files
- Make sure your bucket is configured for public access if you want files to be publicly accessible
- The storage service supports JPEG, PNG, and WebP image formats
- Maximum file size is 5MB

### Troubleshooting Storage Issues

If you're experiencing "Internal Server Error" when uploading files, follow these steps:

1. **Test the storage connection**:
   ```bash
   curl -X GET http://localhost:5002/api/storage/test
   ```

2. **Check environment variables**:
   Make sure all required environment variables are set:
   - `SELECTEL_ACCESS_KEY`
   - `SELECTEL_SECRET_KEY`
   - `SELECTEL_BUCKET`
   - `SELECTEL_ENDPOINT`
   - `SELECTEL_PUBLIC_URL`

3. **Common issues**:
   - **Access Denied**: Check your access key and secret key
   - **Bucket Not Found**: Verify the bucket name exists in your Selectel account
   - **Network Error**: Check your endpoint URL and internet connection
   - **Invalid Credentials**: Ensure your access key and secret key are correct

4. **Check server logs**:
   The storage service now provides detailed logging. Look for:
   - Storage service initialization logs
   - Upload configuration details
   - Specific error codes and messages

5. **Verify bucket permissions**:
   Ensure your Selectel bucket is configured for:
   - Public read access (if you want files to be publicly accessible)
   - Proper CORS settings (if uploading from web browsers)