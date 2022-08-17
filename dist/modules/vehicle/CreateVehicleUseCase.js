"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');


















 class CreateVehicleUseCase {
    async execute(data) {
        const vehicleExist = await _prismaClient.prisma.vehicle.findFirst({
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
            vehicle = await _prismaClient.prisma.vehicle.create({
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
            vehicle = await _prismaClient.prisma.vehicle.create({
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
} exports.CreateVehicleUseCase = CreateVehicleUseCase;