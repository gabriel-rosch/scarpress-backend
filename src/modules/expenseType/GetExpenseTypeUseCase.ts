import {prisma} from "../../database/prismaClient";

export class GetExpenseTypeUseCase {
    async execute() {
        const expenseType = await prisma.expenseType.findMany();
        return expenseType;
    }
}