/*
  Warnings:

  - Added the required column `password` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- First add the column as nullable
ALTER TABLE "users" ADD COLUMN "password" TEXT;

-- Set a default password for existing users (they should change this)
UPDATE "users" SET "password" = '240be518fabd2724ddb6f04eeb1da5967448d7e831c08c8fa822809f74c720a9'; -- Default password is 'changeme'

-- Make the column required
ALTER TABLE "users" ALTER COLUMN "password" SET NOT NULL;
