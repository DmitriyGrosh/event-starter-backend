#!/bin/bash

echo "🔄 Running Database Migrations"
echo "=============================="

# Load environment variables
if [ -f ".env" ]; then
    source .env
    echo "✅ Loaded environment variables from .env"
else
    echo "❌ .env file not found"
    exit 1
fi

# Validate required environment variables
if [ -z "$POSTGRES_USER" ] || [ -z "$POSTGRES_PASSWORD" ] || [ -z "$POSTGRES_DB" ]; then
    echo "❌ Missing required database environment variables"
    echo "Required: POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB"
    exit 1
fi

# Test database connectivity
echo "🔌 Testing database connection..."
PGPASSWORD="$POSTGRES_PASSWORD" psql -h "${POSTGRES_HOST}" -p "${POSTGRES_PORT}" -U "$POSTGRES_USER" -d "$POSTGRES_DB" -c "SELECT 'Connection successful!' as status;" > /dev/null 2>&1

if [ $? -eq 0 ]; then
    echo "✅ Database connection successful"
else
    echo "❌ Database connection failed"
    exit 1
fi

# Run migrations using Docker
echo "🚀 Running Prisma migrations..."
docker run --rm \
    --env-file .env \
    --network host \
    ghcr.io/dmitriygrosh/event-starter-backend:${IMAGE_TAG:-latest} \
    sh -c "pnpm run db:migrate:deploy"

if [ $? -eq 0 ]; then
    echo "✅ Migrations completed successfully!"
else
    echo "❌ Migration failed!"
    exit 1
fi

# Optional: Run database seeding
read -p "Do you want to run database seeding? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🌱 Running database seeding..."
    docker run --rm \
        --env-file .env \
        --network host \
        ${DOCKER_IMAGE_NAME:-event-starter-backend}:${DOCKER_IMAGE_TAG:-latest} \
        sh -c "pnpm run db:seed"
    
    if [ $? -eq 0 ]; then
        echo "✅ Seeding completed successfully!"
    else
        echo "❌ Seeding failed!"
    fi
fi

echo "🏁 Migration process complete!" 