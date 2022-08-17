import {prisma} from "../../database/prismaClient";

export class GetExpenseUseCase {
    async execute() {
        const expense = await prisma.expense.findMany({
            include: {
                ExpenseType: true,
                Freight: true,
                Vehicle: true,
                
            }
        });
        return expense;
    }
}