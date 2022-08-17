"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class GetExpenseTypeUseCase {
    async execute() {
        const expenseType = await _prismaClient.prisma.expenseType.findMany();
        return expenseType;
    }
} exports.GetExpenseTypeUseCase = GetExpenseTypeUseCase;