/*
  Warnings:

  - You are about to drop the column `brand` on the `articulated` table. All the data in the column will be lost.
  - You are about to drop the column `chassis` on the `articulated` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `articulated` table. All the data in the column will be lost.
  - You are about to drop the column `model` on the `articulated` table. All the data in the column will be lost.
  - You are about to drop the column `owner` on the `articulated` table. All the data in the column will be lost.
  - You are about to drop the column `plate` on the `articulated` table. All the data in the column will be lost.
  - You are about to drop the column `renavan` on the `articulated` table. All the data in the column will be lost.
  - You are about to drop the column `tracked` on the `articulated` table. All the data in the column will be lost.
  - You are about to drop the column `weight` on the `articulated` table. All the data in the column will be lost.
  - You are about to drop the column `year` on the `articulated` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "articulated_plate_key";

-- AlterTable
ALTER TABLE "articulated" DROP COLUMN "brand",
DROP COLUMN "chassis",
DROP COLUMN "description",
DROP COLUMN "model",
DROP COLUMN "owner",
DROP COLUMN "plate",
DROP COLUMN "renavan",
DROP COLUMN "tracked",
DROP COLUMN "weight",
DROP COLUMN "year";
