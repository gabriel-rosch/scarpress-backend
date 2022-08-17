import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface IAuthenticateClient {
    username: string,
    password: string,
}
export class AuthenticateClientUseCase {
    async execute({password, username}:IAuthenticateClient) {
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
}