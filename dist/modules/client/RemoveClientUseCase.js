"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class RemoveClientUseCase {
    async execute(id) {
        const client = await _prismaClient.prisma.client.delete({ 
            where: {
                id: id
            }
        });
        if(!client) {
            throw new Error("Erro ao excluir cliente!")
        }
        return client;
    }
} exports.RemoveClientUseCase = RemoveClientUseCase;