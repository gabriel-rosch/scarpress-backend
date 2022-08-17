/*
  Warnings:

  - You are about to drop the `ExpenseType` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ExpenseType";

-- CreateTable
CREATE TABLE "expenseType" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isCommon" BOOLEAN,

    CONSTRAINT "expenseType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "paymentType" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "paymentType_pkey" PRIMARY KEY ("id")
);
