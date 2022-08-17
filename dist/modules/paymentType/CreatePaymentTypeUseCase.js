"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');






 class CreatePaymentTypeUseCase {
    async execute(data) {
        const paymentTypeExists = await _prismaClient.prisma.paymentType.findFirst({
            where: {
                description: {
                    equals: data.description,
                    mode: "insensitive"
                }
            }
        })
        if(paymentTypeExists) {
            throw new Error("Forma de Pagamento já cadastrada!")
        }
       
        const paymentType = await _prismaClient.prisma.paymentType.create({
            data
        })
      
        return paymentType;
    }
} exports.CreatePaymentTypeUseCase = CreatePaymentTypeUseCase;