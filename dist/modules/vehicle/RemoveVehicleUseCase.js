"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class RemoveVehicleUseCase {
    async execute(id) {
        const vehicle = await _prismaClient.prisma.vehicle.delete({ 
            where: {
                id: id
            }
        });
        if(!vehicle) {
            throw new Error("Erro ao excluir veículo!")
        }
        return vehicle;
    }
} exports.RemoveVehicleUseCase = RemoveVehicleUseCase;