/*
  Warnings:

  - You are about to drop the `deliveries` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `deliveryman` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_client_fkey";

-- DropForeignKey
ALTER TABLE "deliveries" DROP CONSTRAINT "deliveries_id_delivery_fkey";

-- DropTable
DROP TABLE "deliveries";

-- DropTable
DROP TABLE "deliveryman";

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "chassis" TEXT,
    "model" TEXT,
    "year" TEXT,
    "renavan" TEXT,
    "brand" TEXT,
    "weight" TEXT,
    "tracked" BOOLEAN NOT NULL,
    "owner" TEXT NOT NULL,
    "articuladosId" TEXT,

    CONSTRAINT "Vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Articulados" (
    "id" TEXT NOT NULL,
    "plate" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "chassis" TEXT,
    "model" TEXT,
    "year" TEXT,
    "renavan" TEXT,
    "brand" TEXT,
    "weight" TEXT,
    "tracked" BOOLEAN NOT NULL,
    "owner" TEXT NOT NULL,

    CONSTRAINT "Articulados_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Vehicle_plate_key" ON "Vehicle"("plate");

-- CreateIndex
CREATE UNIQUE INDEX "Articulados_plate_key" ON "Articulados"("plate");

-- AddForeignKey
ALTER TABLE "Vehicle" ADD CONSTRAINT "Vehicle_articuladosId_fkey" FOREIGN KEY ("articuladosId") REFERENCES "Articulados"("id") ON DELETE SET NULL ON UPDATE CASCADE;
