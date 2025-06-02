#!/bin/sh
set -e

# If MIGRATE_DB is set to "true", run migrations
if [ "$MIGRATE_DB" = "true" ]; then
    echo "Running database migrations..."
    npx prisma migrate deploy
    echo "Migrations completed!"
fi

# Execute the main container command
exec "$@"