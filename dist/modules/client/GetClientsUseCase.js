"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class GetClientUseCase {
    async execute() {
        const clients = await _prismaClient.prisma.client.findMany();
        return clients;
    }
} exports.GetClientUseCase = GetClientUseCase;