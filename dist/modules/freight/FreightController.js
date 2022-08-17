"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreateFreightUseCase = require('./CreateFreightUseCase');
var _GetFreightUseCase = require('./GetFreightUseCase');
var _RemoveFreightUseCase = require('./RemoveFreightUseCase');
var _UpdateFreightUseCase = require('./UpdateFreightUseCase');


 class FreightController {
    async create(request, response) {
        const data = request.body;
        const createFreightUseCase = new (0, _CreateFreightUseCase.CreateFreightUseCase)();
        const result = await createFreightUseCase.execute(data)

        return response.json(result);
    }
    async update(request, response) {
        const data = request.body;
        const updateFreightUseCase = new (0, _UpdateFreightUseCase.UpdateFreightUseCase)();
        const result = await updateFreightUseCase.execute(data)

        return response.json(result);
    }
    async get(request, response) {
        const data = request.query;
        
        const getFreightUseCase = new (0, _GetFreightUseCase.GetFreightUseCase)();
        const result = await getFreightUseCase.execute(data);

        return response.json(result);
    }
    async remove(request, response) {
        const data = request.body;
        const removeFreightUseCase = new (0, _RemoveFreightUseCase.RemoveFreightUseCase)();
        const result = await removeFreightUseCase.execute(data.id);

        return response.json(result);
    }
    
} exports.FreightController = FreightController;

