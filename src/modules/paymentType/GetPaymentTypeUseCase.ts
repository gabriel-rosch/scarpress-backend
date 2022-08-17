import {prisma} from "../../database/prismaClient";

export class GetPaymentTypeUseCase {
    async execute() {
        const expenseType = await prisma.paymentType.findMany();
        return expenseType;
    }
}