import {prisma} from "../../database/prismaClient";


export class UpdateFreightUseCase {
    async updateValuePaid(id:any, data: boolean) {
        console.log(id,data);
        
        await prisma.freight.update({
            where: {
                id
            },
            data: {  
                valuePaid: data
            }
       })
    }

    async execute(data: any) {
        let payments = data.Payment;
        delete data.Payment;
        
        
        console.log(data);
     
        const freight = await prisma.freight.update({
             where: {
                 id: data.id
             },
             data: { 
                 ...data,
             },
             include: {
                 payments:true,
                 Client:true,
                 Vehicle:true,
                 PaymentType:true,
             }
        })
      
        return freight;
    }
}