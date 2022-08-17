"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');


 class UpdateTrafficTicketUseCase {
    async execute(data) {
        delete data.Employee
        const trafficTicket = await _prismaClient.prisma.trafficTicket.update({
             where: {
                 id: data.id
             },
             data,
             include: {
                 Employee: true
             }
        })
      
        return trafficTicket;
    }
} exports.UpdateTrafficTicketUseCase = UpdateTrafficTicketUseCase;