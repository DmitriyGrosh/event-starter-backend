# Build stage
FROM node:20-slim AS builder

# Install OpenSSL and other required dependencies
RUN apt-get update -y && \
    apt-get install -y openssl ca-certificates

# Install specific version of pnpm
RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

WORKDIR /app

# Copy package files
COPY package.json pnpm-lock.yaml* ./

# Install dependencies with force flag to ensure lockfile compatibility
RUN pnpm install

COPY . .

RUN pnpm run db:generate
RUN pnpm run build

FROM node:lts-alpine as runner

# Install OpenSSL and other required dependencies
RUN apk add --no-cache openssl ca-certificates netcat-openbsd

# Install pnpm
RUN corepack enable && corepack prepare pnpm@8.15.4 --activate

WORKDIR /app

# Copy package files and install production dependencies
COPY package.json pnpm-lock.yaml* ./
RUN pnpm install --prod

# Copy prisma files (needed for migrations)
COPY prisma ./prisma/

# Copy wait-for-it script and make it executable
COPY wait-for-it.sh ./
RUN chmod +x wait-for-it.sh

# Copy built application and generated files
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/src/generated ./src/generated

# Expose the port the app runs on
EXPOSE 5002

# Command to run the application
CMD ["./wait-for-it.sh"]

