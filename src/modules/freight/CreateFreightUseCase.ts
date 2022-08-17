import {prisma} from "../../database/prismaClient";

export class CreateFreightUseCase {
  
    async execute(data: any) {
        let payments = data.Payment
        delete data.Payment

        
        const create = await prisma.freight.create({
            data: {
                ...data,
                payments: {
                    create: [
                        ...payments
                    ]
                }
            },
            include: {
                Client:true,
                Vehicle:true,
                payments:true,
                PaymentType:true,
            }
        })

     
      
        return create;
    }
}