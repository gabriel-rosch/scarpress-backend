import {prisma} from "../../database/prismaClient";


export class UpdateManyPaymentUseCase {
    async execute(data: any) {
            const payments = await prisma.payment.update({
                where: {
                    id: data.id
                },
                data
            })   
        
      
        return payments;
    }
}