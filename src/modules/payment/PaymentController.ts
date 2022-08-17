import { Request, Response } from "express";
import { UpdateManyPaymentUseCase } from "./UpdateManyPaymentUseCase";
// import { GetClientUseCase } from "./GetClientsUseCase";
// import { RemoveClientUseCase } from "./RemoveClientUseCase";
import { UpdateFreightUseCase } from "../freight/UpdateFreightUseCase"

export class PaymentController {
    async updateMany(request: Request, response: Response) {
        const data = request.body;
        const updateManyPaymentUseCase = new UpdateManyPaymentUseCase();
        let isAllPaid = true;
        data.forEach(async (p: any) => {
            if(isAllPaid) {
                isAllPaid = p.valuePaid
            }
            await updateManyPaymentUseCase.execute(p);    
        });
        
        
        const updateFreightUseCase = new UpdateFreightUseCase();
        await updateFreightUseCase.updateValuePaid(data[0].freightId, isAllPaid);

        return response.json(isAllPaid);
    }
    
}

