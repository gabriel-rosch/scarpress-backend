import {prisma} from "../../database/prismaClient";

export class RemoveClientUseCase {
    async execute(id: any) {
        const client = await prisma.client.delete({ 
            where: {
                id: id
            }
        });
        if(!client) {
            throw new Error("Erro ao excluir cliente!")
        }
        return client;
    }
}