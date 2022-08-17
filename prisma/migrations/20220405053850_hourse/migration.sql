/*
  Warnings:

  - You are about to drop the column `horse` on the `vehicle` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "vehicle" DROP COLUMN "horse",
ADD COLUMN     "hourse" BOOLEAN;
