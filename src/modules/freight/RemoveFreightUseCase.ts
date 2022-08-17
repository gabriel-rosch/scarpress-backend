import {prisma} from "../../database/prismaClient";

export class RemoveFreightUseCase {
    async execute(id: any) {
        const returnValue = await prisma.freight.delete({ 
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