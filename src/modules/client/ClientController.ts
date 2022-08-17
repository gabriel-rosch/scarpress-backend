import { Request, Response } from "express";
import { CreateClientUseCase } from "./CreateClientUseCase";
import { GetClientUseCase } from "./GetClientsUseCase";
import { RemoveClientUseCase } from "./RemoveClientUseCase";


export class ClientController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createClientUseCase = new CreateClientUseCase();
        const result = await createClientUseCase.execute(data)

        return response.json(result);
    }
    async get(request: Request, response: Response) {
        const getClientUseCase = new GetClientUseCase();
        const result = await getClientUseCase.execute()

        return response.json(result);
    }
    async remove(request: Request, response: Response) {
        const data = request.body;
        const removeClientUseCase = new RemoveClientUseCase();
        const result = await removeClientUseCase.execute(data.id);

        return response.json(result);
    }
    
}

