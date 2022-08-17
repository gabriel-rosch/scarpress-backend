import {prisma} from "../../database/prismaClient";

interface ICreateVheicle {
    id: string;
    plate: string;
    description: string;
    chassis: string;
    model: string;
    year: string;
    renavan: string;
    brand: string; //Marca/fabricante
    weight: string;
    tracked: boolean; //rastreado
    horse: boolean; //cavalo
    owner: string; //proprietario
    axes: string;
    articulateds?:Array<any>; //
}

export class CreateVehicleUseCase {
    async execute(data: ICreateVheicle) {
        const vehicleExist = await prisma.vehicle.findFirst({
            where: {
                plate: {
                    equals: data.plate,
                    mode: "insensitive"
                }
            }
        })
        if(vehicleExist) {
            throw new Error("Placa já cadastrada!")
        }
        let vehicle = null;
        if(!data.articulateds) {
            vehicle = await prisma.vehicle.create({
                data,
                include: {
                    articulateds:true
                }
            })
        } else {
            
            const articulateds = data.articulateds.map((id)=>{
                return {vehicleArticulatedId:id}
            })
            delete data.articulateds;
            vehicle = await prisma.vehicle.create({
                data: {
                    ...data,
                    articulateds: {
                        create: articulateds,
                    },
                },
                include: {
                    articulateds:true
                }
            })
           
        }
        
        return vehicle;
    }
}