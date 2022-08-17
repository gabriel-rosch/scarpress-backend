"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreateTrafficTicketUseCase = require('./CreateTrafficTicketUseCase');
var _GetTrafficTicketsUseCase = require('./GetTrafficTicketsUseCase');
var _RemoveTrafficTicketUseCase = require('./RemoveTrafficTicketUseCase');
var _UpdateTrafficTicketUseCase = require('./UpdateTrafficTicketUseCase');





  

 class TrafficTicketController {
    async create(request, response) {
        const data = request.body;
        const createTrafficTicketUseCase = new (0, _CreateTrafficTicketUseCase.CreateTrafficTicketUseCase)();
        const result = await createTrafficTicketUseCase.execute(data)

        return response.json(result);
    }
    async update(request, response) {
        const data = request.body;
        const updateTrafficTicketUseCase = new (0, _UpdateTrafficTicketUseCase.UpdateTrafficTicketUseCase)();
        const result = await updateTrafficTicketUseCase.execute(data)

        return response.json(result);
    }
    async get(request, response) {
        const data = request.query;
        const getTrafficTicketsUseCase = new (0, _GetTrafficTicketsUseCase.GetTrafficTicketsUseCase)();
        const result = await getTrafficTicketsUseCase.execute(data);

        return response.json(result);
    }
    async remove(request, response) {
        const data = request.body;
        const removeTrafficTicketUseCase = new (0, _RemoveTrafficTicketUseCase.RemoveTrafficTicketUseCase)();
        const result = await removeTrafficTicketUseCase.execute(data.id);

        return response.json(result);
    }
    
} exports.TrafficTicketController = TrafficTicketController;

