"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');








 class CreateTrafficTicketUseCase {
    async execute(data) {
        console.log(data);
        const trafficTicket = await _prismaClient.prisma.trafficTicket.create({
             data,
             include: {
                Employee: true
             }
        })
      
        return trafficTicket;
    }
} exports.CreateTrafficTicketUseCase = CreateTrafficTicketUseCase;