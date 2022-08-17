"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class RemoveExpenseUseCase {
    async execute(id) {
        const expense = await _prismaClient.prisma.expense.delete({ 
            where: {
                id: id
            }
        });
        if(!expense) {
            throw new Error("Erro ao excluir despesa!")
        }
        return expense;
    }
} exports.RemoveExpenseUseCase = RemoveExpenseUseCase;