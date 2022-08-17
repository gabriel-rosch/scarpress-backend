-- CreateTable
CREATE TABLE "TrafficTicket" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "value" DECIMAL(65,30) NOT NULL,
    "employeeId" TEXT,

    CONSTRAINT "TrafficTicket_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TrafficTicket" ADD CONSTRAINT "TrafficTicket_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employee"("id") ON DELETE SET NULL ON UPDATE CASCADE;
