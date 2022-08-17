"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class RemovePaymentTypeUseCase {
    async execute(id) {
        const expenseType = await _prismaClient.prisma.paymentType.delete({ 
            where: {
                id: id
            }
        });
        if(!expenseType) {
            throw new Error("Erro ao excluir forma de pagamento!")
        }
        return expenseType;
    }
} exports.RemovePaymentTypeUseCase = RemovePaymentTypeUseCase;