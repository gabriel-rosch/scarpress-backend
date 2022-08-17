import { Request, Response } from "express";
import { CreateVehicleUseCase } from "./CreateVehicleUseCase";
import { GetVehicleUseCase } from "./GetVehicleUseCase";
import { RemoveVehicleUseCase } from "./RemoveVehicleUseCase";

export class VheiceController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createVehicleUseCase = new CreateVehicleUseCase();
        const result = await createVehicleUseCase.execute(data)

        return response.json(result);
    }
    async get(request: Request, response: Response) {
        const getVehicleUseCase = new GetVehicleUseCase();
        const result = await getVehicleUseCase.execute()

        return response.json(result);
    }
    async remove(request: Request, response: Response) {
        const data = request.body;
        const removeVehicleUseCase = new RemoveVehicleUseCase();
        const result = await removeVehicleUseCase.execute(data.id);

        return response.json(result);
    }
    
}

