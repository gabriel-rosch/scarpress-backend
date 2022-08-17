import {prisma} from "../../database/prismaClient";

export class RemovePaymentTypeUseCase {
    async execute(id: any) {
        const expenseType = await prisma.paymentType.delete({ 
            where: {
                id: id
            }
        });
        if(!expenseType) {
            throw new Error("Erro ao excluir forma de pagamento!")
        }
        return expenseType;
    }
}