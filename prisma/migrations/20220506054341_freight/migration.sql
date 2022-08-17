-- CreateTable
CREATE TABLE "freight" (
    "id" TEXT NOT NULL,
    "vehicleId" TEXT,
    "clientId" TEXT,
    "origin" TEXT,
    "destiny" TEXT,
    "date" TIMESTAMP(3),
    "paymentTypeId" TEXT,
    "value" DECIMAL(65,30),
    "valuePaid" BOOLEAN DEFAULT false,

    CONSTRAINT "freight_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment" (
    "id" TEXT NOT NULL,

    CONSTRAINT "payment_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "freight" ADD CONSTRAINT "freight_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "freight" ADD CONSTRAINT "freight_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "client"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "freight" ADD CONSTRAINT "freight_paymentTypeId_fkey" FOREIGN KEY ("paymentTypeId") REFERENCES "paymentType"("id") ON DELETE SET NULL ON UPDATE CASCADE;
