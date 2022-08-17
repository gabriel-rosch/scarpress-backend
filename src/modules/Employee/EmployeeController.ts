import { Request, Response } from "express";
import { CreateEmployeeUseCase } from "./CreateEmployeeUseCase";
import { GetEmployeesUseCase } from "./GetEmployeesUseCase";
import { RemoveEmployeeUseCase } from "./RemoveEmployeeUseCase";


export class EmployeeController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createEmployeeUseCase = new CreateEmployeeUseCase();
        const result = await createEmployeeUseCase.execute(data)

        return response.json(result);
    }
    async get(request: Request, response: Response) {
        const getEmployeeUseCase = new GetEmployeesUseCase();
        const result = await getEmployeeUseCase.execute(request.query)

        return response.json(result);
    }
    async remove(request: Request, response: Response) {
        const data = request.body;
        const removeEmployeeUseCase = new RemoveEmployeeUseCase();
        const result = await removeEmployeeUseCase.execute(data.id);

        return response.json(result);
    }
    
}

