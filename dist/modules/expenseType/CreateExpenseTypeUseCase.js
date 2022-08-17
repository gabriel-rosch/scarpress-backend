"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');






 class CreateExpenseTypeUseCase {
    async execute(data) {
        const expenseTypeExists = await _prismaClient.prisma.expenseType.findFirst({
            where: {
                description: {
                    equals: data.description,
                    mode: "insensitive"
                }
            }
        })
        if(expenseTypeExists) {
            throw new Error("Tipo de despesa já cadastrada!")
        }
       
        const expenseType = await _prismaClient.prisma.expenseType.create({
            data
        })
      
        return expenseType;
    }
} exports.CreateExpenseTypeUseCase = CreateExpenseTypeUseCase;