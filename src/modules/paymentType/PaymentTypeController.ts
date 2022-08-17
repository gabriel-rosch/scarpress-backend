import { Request, Response } from "express";
import { CreatePaymentTypeUseCase } from "./CreatePaymentTypeUseCase";
import { GetPaymentTypeUseCase } from "./GetPaymentTypeUseCase";
import { RemovePaymentTypeUseCase } from "./RemovePaymentTypeUseCase";

export class PaymentTypeController {
    async create(request: Request, response: Response) {
        const data = request.body;
        const createPaymentTypeUseCase = new CreatePaymentTypeUseCase();
        const result = await createPaymentTypeUseCase.execute(data)

        return response.json(result);
    }
    async get(request: Request, response: Response) {
        const getPaymentTypeUseCase = new GetPaymentTypeUseCase();
        const result = await getPaymentTypeUseCase.execute()

        return response.json(result);
    }
    async remove(request: Request, response: Response) {
        const data = request.body;
        const removePaymentTypeUseCase = new RemovePaymentTypeUseCase();
        const result = await removePaymentTypeUseCase.execute(data.id);

        return response.json(result);
    }
}

