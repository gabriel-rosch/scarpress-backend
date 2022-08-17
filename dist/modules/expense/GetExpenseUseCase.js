"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class GetExpenseUseCase {
    async execute() {
        const expense = await _prismaClient.prisma.expense.findMany({
            include: {
                ExpenseType: true,
                Freight: true,
                Vehicle: true,
                
            }
        });
        return expense;
    }
} exports.GetExpenseUseCase = GetExpenseUseCase;