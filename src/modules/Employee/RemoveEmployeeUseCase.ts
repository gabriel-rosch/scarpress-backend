import {prisma} from "../../database/prismaClient";

export class RemoveEmployeeUseCase {
    async execute(id: any) {
        const employee = await prisma.employee.delete({ 
            where: {
                id: id
            }
        });
        if(!employee) {
            throw new Error("Erro ao excluir Funcionário!")
        }
        return employee;
    }
}