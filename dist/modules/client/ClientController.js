"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreateClientUseCase = require('./CreateClientUseCase');
var _GetClientsUseCase = require('./GetClientsUseCase');
var _RemoveClientUseCase = require('./RemoveClientUseCase');


 class ClientController {
    async create(request, response) {
        const data = request.body;
        const createClientUseCase = new (0, _CreateClientUseCase.CreateClientUseCase)();
        const result = await createClientUseCase.execute(data)

        return response.json(result);
    }
    async get(request, response) {
        const getClientUseCase = new (0, _GetClientsUseCase.GetClientUseCase)();
        const result = await getClientUseCase.execute()

        return response.json(result);
    }
    async remove(request, response) {
        const data = request.body;
        const removeClientUseCase = new (0, _RemoveClientUseCase.RemoveClientUseCase)();
        const result = await removeClientUseCase.execute(data.id);

        return response.json(result);
    }
    
} exports.ClientController = ClientController;

