import {prisma} from "../../database/prismaClient";

interface ICreateExpenseType {
    id: string;
    description: string;
}

export class CreateExpenseTypeUseCase {
    async execute(data: ICreateExpenseType) {
        const expenseTypeExists = await prisma.expenseType.findFirst({
            where: {
                description: {
                    equals: data.description,
                    mode: "insensitive"
                }
            }
        })
        if(expenseTypeExists) {
            throw new Error("Tipo de despesa já cadastrada!")
        }
       
        const expenseType = await prisma.expenseType.create({
            data
        })
      
        return expenseType;
    }
}