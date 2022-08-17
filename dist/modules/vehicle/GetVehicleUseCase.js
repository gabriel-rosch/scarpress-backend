"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class GetVehicleUseCase {
    async execute() {
        const vehicles = await _prismaClient.prisma.vehicle.findMany({
            include: {
                articulateds:true
            }
        });
        return vehicles;
    }
} exports.GetVehicleUseCase = GetVehicleUseCase;