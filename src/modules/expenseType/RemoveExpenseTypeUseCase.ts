import {prisma} from "../../database/prismaClient";

export class RemoveExpenseTypeUseCase {
    async execute(id: any) {
        const expenseType = await prisma.expenseType.delete({ 
            where: {
                id: id
            }
        });
        if(!expenseType) {
            throw new Error("Erro ao excluir cliente!")
        }
        return expenseType;
    }
}