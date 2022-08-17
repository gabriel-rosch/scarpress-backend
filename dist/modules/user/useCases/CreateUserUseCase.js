"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../../database/prismaClient');
var _bcrypt = require('bcrypt');





 class CreateUserUseCase {
    async execute({password, username}) {
        const clientExist = await _prismaClient.prisma.user.findFirst({
            where: {
                username: {
                    equals: username,
                    mode: "insensitive"
                }
            }
        })
        console.log(clientExist)
        if(clientExist) {
            throw new Error("Client already exists")
        }

        const hashPassword = await _bcrypt.hash.call(void 0, password, 10)

        const client = await _prismaClient.prisma.user.create({
            data: {
                password: hashPassword,
                username,
            }
        })
        return client;
    }
} exports.CreateUserUseCase = CreateUserUseCase;