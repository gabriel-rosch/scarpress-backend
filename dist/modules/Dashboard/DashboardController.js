"use strict";Object.defineProperty(exports, "__esModule", {value: true});

var _GetDashboardUseCase = require('./GetDashboardUseCase');


 class DashboardController {
   
    async getVehicles(request, response) {
        const getDashboardUseCase = new (0, _GetDashboardUseCase.GetDashboardUseCase)();
        const result = await getDashboardUseCase.executeVehicle()

        return response.json(result);
    }
   
    
} exports.DashboardController = DashboardController;

