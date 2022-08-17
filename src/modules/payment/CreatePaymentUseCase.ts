import {prisma} from "../../database/prismaClient";

export class CreatePaymentUseCase {
    async execute(data: any) {  
        const payment = await prisma.payment.create({
            data
        })
      
        return payment;
    }
}