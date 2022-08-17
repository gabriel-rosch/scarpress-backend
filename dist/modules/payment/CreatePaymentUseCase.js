"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class CreatePaymentUseCase {
    async execute(data) {  
        const payment = await _prismaClient.prisma.payment.create({
            data
        })
      
        return payment;
    }
} exports.CreatePaymentUseCase = CreatePaymentUseCase;