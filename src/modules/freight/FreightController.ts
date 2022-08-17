import { Request, Response } from "express";
import { CreateFreightUseCase } from "./CreateFreightUseCase";
import { GetFreightUseCase } from "./GetFreightUseCase";
import { RemoveFreightUseCase } from "./RemoveFreightUseCase";
import { UpdateFreightUseCase } from "./UpdateFreightUseCase";


export class FreightController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createFreightUseCase = new CreateFreightUseCase();
        const result = await createFreightUseCase.execute(data)

        return response.json(result);
    }
    async update(request: Request, response: Response) {
        const data = request.body;
        const updateFreightUseCase = new UpdateFreightUseCase();
        const result = await updateFreightUseCase.execute(data)

        return response.json(result);
    }
    async get(request: Request, response: Response) {
        const data = request.query;
        
        const getFreightUseCase = new GetFreightUseCase();
        const result = await getFreightUseCase.execute(data);

        return response.json(result);
    }
    async remove(request: Request, response: Response) {
        const data = request.body;
        const removeFreightUseCase = new RemoveFreightUseCase();
        const result = await removeFreightUseCase.execute(data.id);

        return response.json(result);
    }
    
}

