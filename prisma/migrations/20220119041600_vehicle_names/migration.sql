/*
  Warnings:

  - You are about to drop the `Articulados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Vehicle` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Vehicle" DROP CONSTRAINT "Vehicle_articuladosId_fkey";

-- DropTable
DROP TABLE "Articulados";

-- DropTable
DROP TABLE "Vehicle";

-- CreateTable
CREATE TABLE "vehicle" (
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
    "articulatedId" TEXT,

    CONSTRAINT "vehicle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "articulated" (
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

    CONSTRAINT "articulated_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "vehicle_plate_key" ON "vehicle"("plate");

-- CreateIndex
CREATE UNIQUE INDEX "articulated_plate_key" ON "articulated"("plate");

-- AddForeignKey
ALTER TABLE "vehicle" ADD CONSTRAINT "vehicle_articulatedId_fkey" FOREIGN KEY ("articulatedId") REFERENCES "articulated"("id") ON DELETE SET NULL ON UPDATE CASCADE;
