"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class RemoveExpenseTypeUseCase {
    async execute(id) {
        const expenseType = await _prismaClient.prisma.expenseType.delete({ 
            where: {
                id: id
            }
        });
        if(!expenseType) {
            throw new Error("Erro ao excluir cliente!")
        }
        return expenseType;
    }
} exports.RemoveExpenseTypeUseCase = RemoveExpenseTypeUseCase;