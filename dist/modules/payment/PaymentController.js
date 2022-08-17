"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _UpdateManyPaymentUseCase = require('./UpdateManyPaymentUseCase');
// import { GetClientUseCase } from "./GetClientsUseCase";
// import { RemoveClientUseCase } from "./RemoveClientUseCase";
var _UpdateFreightUseCase = require('../freight/UpdateFreightUseCase');

 class PaymentController {
    async updateMany(request, response) {
        const data = request.body;
        const updateManyPaymentUseCase = new (0, _UpdateManyPaymentUseCase.UpdateManyPaymentUseCase)();
        let isAllPaid = true;
        data.forEach(async (p) => {
            if(isAllPaid) {
                isAllPaid = p.valuePaid
            }
            await updateManyPaymentUseCase.execute(p);    
        });
        
        
        const updateFreightUseCase = new (0, _UpdateFreightUseCase.UpdateFreightUseCase)();
        await updateFreightUseCase.updateValuePaid(data[0].freightId, isAllPaid);

        return response.json(isAllPaid);
    }
    
} exports.PaymentController = PaymentController;

