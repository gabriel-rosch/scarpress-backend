"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreateVehicleUseCase = require('./CreateVehicleUseCase');
var _GetVehicleUseCase = require('./GetVehicleUseCase');
var _RemoveVehicleUseCase = require('./RemoveVehicleUseCase');

 class VheiceController {
    async create(request, response) {
        const data = request.body;
        const createVehicleUseCase = new (0, _CreateVehicleUseCase.CreateVehicleUseCase)();
        const result = await createVehicleUseCase.execute(data)

        return response.json(result);
    }
    async get(request, response) {
        const getVehicleUseCase = new (0, _GetVehicleUseCase.GetVehicleUseCase)();
        const result = await getVehicleUseCase.execute()

        return response.json(result);
    }
    async remove(request, response) {
        const data = request.body;
        const removeVehicleUseCase = new (0, _RemoveVehicleUseCase.RemoveVehicleUseCase)();
        const result = await removeVehicleUseCase.execute(data.id);

        return response.json(result);
    }
    
} exports.VheiceController = VheiceController;

