"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class RemoveFreightUseCase {
    async execute(id) {
        const returnValue = await _prismaClient.prisma.freight.delete({ 
            where: {
                id: id
            }
        });
        if(!returnValue) {
            throw new Error("Erro ao excluir multa!")
        }
        return returnValue;
    }
} exports.RemoveFreightUseCase = RemoveFreightUseCase;