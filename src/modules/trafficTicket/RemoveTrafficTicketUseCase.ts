import {prisma} from "../../database/prismaClient";

export class RemoveTrafficTicketUseCase {
    async execute(id: any) {
        const returnValue = await prisma.trafficTicket.delete({ 
            where: {
                id: id
            }
        });
        if(!returnValue) {
            throw new Error("Erro ao excluir multa!")
        }
        return returnValue;
    }
}