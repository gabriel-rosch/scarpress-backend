/*
  Warnings:

  - You are about to drop the column `bairro` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `cidade` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `complemento` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `endereco` on the `client` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "client" DROP COLUMN "bairro",
DROP COLUMN "cidade",
DROP COLUMN "complemento",
DROP COLUMN "endereco",
DROP COLUMN "estado",
ADD COLUMN     "address" TEXT,
ADD COLUMN     "city" TEXT,
ADD COLUMN     "complement" TEXT,
ADD COLUMN     "district" TEXT,
ADD COLUMN     "state" TEXT;
