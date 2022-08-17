"use strict";Object.defineProperty(exports, "__esModule", {value: true});







 class AuthenticateClientUseCase {
    async execute({password, username}) {
        // const client = await prisma.client.findFirst({
        //     where: {
                
        //     }
        // })

        // if(!client) {
        //     throw new Error("Username or password invalid!")
        // }

        // const passwordMatch = await compare(password, client.password)

        // if(!passwordMatch) {
        //     throw new Error("Username or password invalid!")
        // }
        // const hashToken = process.env.HASH_TOKEN as string;
        // const token = sign({username}, hashToken ,{
        //     subject:client.id,
        //     expiresIn: "1d"
        // })

        return null
    }
} exports.AuthenticateClientUseCase = AuthenticateClientUseCase;