/*
  Warnings:

  - Added the required column `axes` to the `vehicle` table without a default value. This is not possible if the table is not empty.
  - Added the required column `horse` to the `vehicle` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "vehicle" ADD COLUMN     "axes" TEXT NOT NULL,
ADD COLUMN     "horse" BOOLEAN NOT NULL;
