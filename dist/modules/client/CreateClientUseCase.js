"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');













 class CreateClientUseCase {
    async execute(data) {
        const clientExist = await _prismaClient.prisma.client.findFirst({
            where: {
                name: {
                    equals: data.name,
                    mode: "insensitive"
                }
            }
        })
        if(clientExist) {
            throw new Error("Nome já cadastrado!")
        }
       
        const client = await _prismaClient.prisma.client.create({
            data
        })
      
        return client;
    }
} exports.CreateClientUseCase = CreateClientUseCase;