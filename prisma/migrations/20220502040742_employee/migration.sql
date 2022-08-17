-- CreateTable
CREATE TABLE "employee" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "occupation" TEXT,
    "commission" DECIMAL(65,30),
    "admission" TIMESTAMP(3),
    "uniform" TEXT,
    "birth" TIMESTAMP(3),
    "cpf" TEXT,
    "rg" TEXT,
    "pis" TEXT,
    "cnh" TEXT,
    "cnhValidate" TIMESTAMP(3),
    "resignation" TIMESTAMP(3),
    "toxicologicalExam" TIMESTAMP(3),
    "cep" TEXT,
    "district" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "complement" TEXT,
    "email" TEXT,
    "vehicleId" TEXT,

    CONSTRAINT "employee_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "employee" ADD CONSTRAINT "employee_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "vehicle"("id") ON DELETE SET NULL ON UPDATE CASCADE;
