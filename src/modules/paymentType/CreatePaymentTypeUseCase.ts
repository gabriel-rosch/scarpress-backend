import {prisma} from "../../database/prismaClient";

interface ICreatePaymentType {
    id: string;
    description: string;
}

export class CreatePaymentTypeUseCase {
    async execute(data: ICreatePaymentType) {
        const paymentTypeExists = await prisma.paymentType.findFirst({
            where: {
                description: {
                    equals: data.description,
                    mode: "insensitive"
                }
            }
        })
        if(paymentTypeExists) {
            throw new Error("Forma de Pagamento já cadastrada!")
        }
       
        const paymentType = await prisma.paymentType.create({
            data
        })
      
        return paymentType;
    }
}