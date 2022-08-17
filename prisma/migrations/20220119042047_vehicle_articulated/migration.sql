/*
  Warnings:

  - You are about to drop the column `articulatedId` on the `vehicle` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "vehicle" DROP CONSTRAINT "vehicle_articulatedId_fkey";

-- AlterTable
ALTER TABLE "articulated" ADD COLUMN     "vehicleId" TEXT;

-- AlterTable
ALTER TABLE "vehicle" DROP COLUMN "articulatedId";

-- AddForeignKey
ALTER TABLE "articulated" ADD CONSTRAINT "articulated_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
