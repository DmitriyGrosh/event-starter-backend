#!/bin/sh
# wait-for-it.sh

set -e

host="${POSTGRES_HOST:-localhost}"
port="${POSTGRES_PORT:-5432}"

until nc -z "$host" "$port"; do
  echo "Waiting for PostgreSQL to be ready at $host:$port..."
  sleep 1
done

echo "PostgreSQL is ready, running migrations..."
npx prisma migrate deploy

echo "Running Prisma generate..."
npx prisma generate

echo "Starting the application..."
exec node --experimental-specifier-resolution=node dist/server.js 