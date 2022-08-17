"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class RemoveTrafficTicketUseCase {
    async execute(id) {
        const returnValue = await _prismaClient.prisma.trafficTicket.delete({ 
            where: {
                id: id
            }
        });
        if(!returnValue) {
            throw new Error("Erro ao excluir multa!")
        }
        return returnValue;
    }
} exports.RemoveTrafficTicketUseCase = RemoveTrafficTicketUseCase;