import {prisma} from "../../database/prismaClient";

export class RemoveVehicleUseCase {
    async execute(id: any) {
        const vehicle = await prisma.vehicle.delete({ 
            where: {
                id: id
            }
        });
        if(!vehicle) {
            throw new Error("Erro ao excluir veículo!")
        }
        return vehicle;
    }
}