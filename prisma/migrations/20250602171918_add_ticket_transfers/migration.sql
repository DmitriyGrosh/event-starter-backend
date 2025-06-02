-- CreateTable
CREATE TABLE "ticket_transfers" (
    "id" SERIAL NOT NULL,
    "from_purchase_id" INTEGER NOT NULL,
    "to_purchase_id" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ticket_transfers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ticket_transfers" ADD CONSTRAINT "ticket_transfers_from_purchase_id_fkey" FOREIGN KEY ("from_purchase_id") REFERENCES "ticket_purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ticket_transfers" ADD CONSTRAINT "ticket_transfers_to_purchase_id_fkey" FOREIGN KEY ("to_purchase_id") REFERENCES "ticket_purchases"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
