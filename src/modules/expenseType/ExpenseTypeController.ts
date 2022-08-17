import { Request, Response } from "express";
import { CreateExpenseTypeUseCase } from "./CreateExpenseTypeUseCase";
import { GetExpenseTypeUseCase } from "./GetExpenseTypeUseCase";
import { RemoveExpenseTypeUseCase } from "./RemoveExpenseTypeUseCase";

export class ExpenseTypeController {
    async create(request: Request, response: Response) {
        const data = request.body;
        data.isCommon = (data.isCommon === 'true')
        const createExpenseTypeUseCase = new CreateExpenseTypeUseCase();
        const result = await createExpenseTypeUseCase.execute(data)

        return response.json(result);
    }
    async get(request: Request, response: Response) {
        const getExpenseTypeUseCase = new GetExpenseTypeUseCase();
        const result = await getExpenseTypeUseCase.execute()

        return response.json(result);
    }
    async remove(request: Request, response: Response) {
        const data = request.body;
        const removeExpenseTypeUseCase = new RemoveExpenseTypeUseCase();
        const result = await removeExpenseTypeUseCase.execute(data.id);

        return response.json(result);
    }
}

