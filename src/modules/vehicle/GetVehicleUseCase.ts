import {prisma} from "../../database/prismaClient";

export class GetVehicleUseCase {
    async execute() {
        const vehicles = await prisma.vehicle.findMany({
            include: {
                articulateds:true
            }
        });
        return vehicles;
    }
}