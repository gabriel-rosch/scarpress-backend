import { Request, Response } from "express";

import { GetDashboardUseCase } from "./GetDashboardUseCase";


export class DashboardController {
   
    async getVehicles(request: Request, response: Response) {
        const getDashboardUseCase = new GetDashboardUseCase();
        const result = await getDashboardUseCase.executeVehicle()

        return response.json(result);
    }
   
    
}

