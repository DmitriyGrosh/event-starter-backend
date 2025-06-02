#!/bin/sh
# wait-for-it.sh

set -e

host="$1"
shift
cmd="$@"

until nc -z "$host" 5432; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 1
done

echo "PostgreSQL is ready, running migrations..."
npx prisma migrate deploy

echo "Running Prisma generate..."
npx prisma generate

echo "Starting the application..."
exec $cmd 