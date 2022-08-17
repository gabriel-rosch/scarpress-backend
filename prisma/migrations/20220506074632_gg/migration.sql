/*
  Warnings:

  - You are about to drop the `freight` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `payment` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "freight" DROP CONSTRAINT "freight_clientId_fkey";

-- DropForeignKey
ALTER TABLE "freight" DROP CONSTRAINT "freight_paymentTypeId_fkey";

-- DropForeignKey
ALTER TABLE "freight" DROP CONSTRAINT "freight_vehicleId_fkey";

-- DropTable
DROP TABLE "freight";

-- DropTable
DROP TABLE "payment";

-- CreateTable
CREATE TABLE "Freight" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT,
    "clientId" TEXT,
    "origin" TEXT,
    "destiny" TEXT,
    "date" TIMESTAMP(3),
    "paymentTypeId" TEXT,
    "value" DECIMAL(65,30),
    "valuePaid" BOOLEAN DEFAULT false,

    CONSTRAINT "Freight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Payment" (
    "id" TEXT NOT NULL,
    "value" DECIMAL(65,30),
    "valuePaid" BOOLEAN DEFAULT false,
    "freightId" TEXT,

    CONSTRAINT "Payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Freight" ADD CONSTRAINT "Freight_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Freight" ADD CONSTRAINT "Freight_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Freight" ADD CONSTRAINT "Freight_paymentTypeId_fkey" FOREIGN KEY ("paymentTypeId") REFERENCES "paymentType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Payment" ADD CONSTRAINT "Payment_freightId_fkey" FOREIGN KEY ("freightId") REFERENCES "Freight"("id") ON DELETE SET NULL ON UPDATE CASCADE;
