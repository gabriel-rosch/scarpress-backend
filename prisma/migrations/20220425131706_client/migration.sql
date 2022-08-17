-- CreateTable
CREATE TABLE "client" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "cnpj" TEXT,
    "cep" TEXT,
    "bairro" TEXT,
    "endereco" TEXT,
    "cidade" TEXT,
    "estado" TEXT,
    "complemento" TEXT,
    "email" TEXT,

    CONSTRAINT "client_pkey" PRIMARY KEY ("id")
);
