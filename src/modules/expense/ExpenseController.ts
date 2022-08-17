import { Request, Response } from "express";
import { CreateExpenseUseCase } from "./CreateExpenseUseCase";
import { GetExpenseUseCase } from "./GetExpenseUseCase";
import { RemoveExpenseUseCase } from "./RemoveExpenseUseCase";

export class ExpenseController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createExpenseUseCase = new CreateExpenseUseCase();
        const result = await createExpenseUseCase.execute(data)

        return response.json(result);
    }
    async get(request: Request, response: Response) {
        const getExpenseUseCase = new GetExpenseUseCase();
        const result = await getExpenseUseCase.execute()

        return response.json(result);
    }
    async remove(request: Request, response: Response) {
        const data = request.body;
        const removeExpenseUseCase = new RemoveExpenseUseCase();
        const result = await removeExpenseUseCase.execute(data.id);

        return response.json(result);
    }
}

