import {prisma} from "../../database/prismaClient";

export class RemoveExpenseUseCase {
    async execute(id: any) {
        const expense = await prisma.expense.delete({ 
            where: {
                id: id
            }
        });
        if(!expense) {
            throw new Error("Erro ao excluir despesa!")
        }
        return expense;
    }
}