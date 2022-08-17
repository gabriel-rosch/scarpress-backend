"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class CreateFreightUseCase {
  
    async execute(data) {
        let payments = data.Payment
        delete data.Payment

        
        const create = await _prismaClient.prisma.freight.create({
            data: {
                ...data,
                payments: {
                    create: [
                        ...payments
                    ]
                }
            },
            include: {
                Client:true,
                Vehicle:true,
                payments:true,
                PaymentType:true,
            }
        })

     
      
        return create;
    }
} exports.CreateFreightUseCase = CreateFreightUseCase;