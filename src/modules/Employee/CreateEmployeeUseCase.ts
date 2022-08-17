import {prisma} from "../../database/prismaClient";

export class CreateEmployeeUseCase {
    async execute(data: any) {
        const employeeExist = await prisma.employee.findFirst({
            where: {
                name: {
                    equals: data.name,
                    mode: "insensitive"
                }
            }
        })
        if(employeeExist) {
            throw new Error("Nome já cadastrado!")
        }
       
        const employee = await prisma.employee.create({
            data
        })
      
        return employee;
    }
}