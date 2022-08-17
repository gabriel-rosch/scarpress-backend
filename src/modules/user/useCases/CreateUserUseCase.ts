import {prisma} from "../../../database/prismaClient";
import {hash} from "bcrypt"
interface ICreateUser {
    username: string,
    password: string
}

export class CreateUserUseCase {
    async execute({password, username}: ICreateUser) {
        const clientExist = await prisma.user.findFirst({
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

        const hashPassword = await hash(password, 10)

        const client = await prisma.user.create({
            data: {
                password: hashPassword,
                username,
            }
        })
        return client;
    }
}