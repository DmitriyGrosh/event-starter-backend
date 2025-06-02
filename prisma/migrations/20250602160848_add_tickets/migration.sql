/*
  Warnings:

  - Added the required column `location` to the `events` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "events" ADD COLUMN     "location" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "tickets" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "price" DECIMAL(10,2) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "event_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ticket_purchases" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPaid" DECIMAL(10,2) NOT NULL,
    "status" TEXT NOT NULL,
    "ticket_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ticket_purchases_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_event_id_fkey" FOREIGN KEY ("event_id") REFERENCES "events"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_purchases" ADD CONSTRAINT "ticket_purchases_ticket_id_fkey" FOREIGN KEY ("ticket_id") REFERENCES "tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_purchases" ADD CONSTRAINT "ticket_purchases_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
