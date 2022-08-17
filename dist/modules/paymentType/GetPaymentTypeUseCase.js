"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class GetPaymentTypeUseCase {
    async execute() {
        const expenseType = await _prismaClient.prisma.paymentType.findMany();
        return expenseType;
    }
} exports.GetPaymentTypeUseCase = GetPaymentTypeUseCase;