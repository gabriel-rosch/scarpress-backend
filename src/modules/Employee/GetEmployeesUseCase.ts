import {prisma} from "../../database/prismaClient";

export class GetEmployeesUseCase {
    async execute(data: any) {
        let employees = null;
        if(data.occupation) {
            employees= await prisma.employee.findMany({
                where: {
                    occupation: data.occupation
                }    
            });
        } else {
            employees = await prisma.employee.findMany();
        }
        return employees;
    }
}

