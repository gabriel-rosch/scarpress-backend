"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');


 class UpdateManyPaymentUseCase {
    async execute(data) {
            const payments = await _prismaClient.prisma.payment.update({
                where: {
                    id: data.id
                },
                data
            })   
        
      
        return payments;
    }
} exports.UpdateManyPaymentUseCase = UpdateManyPaymentUseCase;