"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class RemoveEmployeeUseCase {
    async execute(id) {
        const employee = await _prismaClient.prisma.employee.delete({ 
            where: {
                id: id
            }
        });
        if(!employee) {
            throw new Error("Erro ao excluir Funcionário!")
        }
        return employee;
    }
} exports.RemoveEmployeeUseCase = RemoveEmployeeUseCase;