#!/bin/sh
# wait-for-it.sh

set -e

env | grep -i postgres
env | grep -i database

host="${POSTGRES_HOST}"
port="${POSTGRES_PORT}"

until nc -z "$host" "$port"; do
  echo "Waiting for PostgreSQL to be ready at $host:$port..."
  sleep 1
done

echo "PostgreSQL is ready!"
echo "Starting the application..."
exec node --experimental-specifier-resolution=node dist/server.js 