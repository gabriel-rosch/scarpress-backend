import {prisma} from "../../database/prismaClient";

export class GetClientUseCase {
    async execute() {
        const clients = await prisma.client.findMany();
        return clients;
    }
}