-- CreateTable
CREATE TABLE "ExpenseType" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "isCommon" BOOLEAN,

    CONSTRAINT "ExpenseType_pkey" PRIMARY KEY ("id")
);
