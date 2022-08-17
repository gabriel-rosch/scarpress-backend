import { Request, Response } from "express";
import { CreateTrafficTicketUseCase } from "./CreateTrafficTicketUseCase";
import { GetTrafficTicketsUseCase } from "./GetTrafficTicketsUseCase";
import { RemoveTrafficTicketUseCase } from "./RemoveTrafficTicketUseCase";
import { UpdateTrafficTicketUseCase } from "./UpdateTrafficTicketUseCase";
export interface TrafficTicketSearch {
    id: string;
    startDate: any;
    endDate: any;
    employeeId: any;
  }  

export class TrafficTicketController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createTrafficTicketUseCase = new CreateTrafficTicketUseCase();
        const result = await createTrafficTicketUseCase.execute(data)

        return response.json(result);
    }
    async update(request: Request, response: Response) {
        const data = request.body;
        const updateTrafficTicketUseCase = new UpdateTrafficTicketUseCase();
        const result = await updateTrafficTicketUseCase.execute(data)

        return response.json(result);
    }
    async get(request: Request, response: Response) {
        const data = request.query;
        const getTrafficTicketsUseCase = new GetTrafficTicketsUseCase();
        const result = await getTrafficTicketsUseCase.execute(data);

        return response.json(result);
    }
    async remove(request: Request, response: Response) {
        const data = request.body;
        const removeTrafficTicketUseCase = new RemoveTrafficTicketUseCase();
        const result = await removeTrafficTicketUseCase.execute(data.id);

        return response.json(result);
    }
    
}

