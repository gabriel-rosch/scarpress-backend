"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreatePaymentTypeUseCase = require('./CreatePaymentTypeUseCase');
var _GetPaymentTypeUseCase = require('./GetPaymentTypeUseCase');
var _RemovePaymentTypeUseCase = require('./RemovePaymentTypeUseCase');

 class PaymentTypeController {
    async create(request, response) {
        const data = request.body;
        const createPaymentTypeUseCase = new (0, _CreatePaymentTypeUseCase.CreatePaymentTypeUseCase)();
        const result = await createPaymentTypeUseCase.execute(data)

        return response.json(result);
    }
    async get(request, response) {
        const getPaymentTypeUseCase = new (0, _GetPaymentTypeUseCase.GetPaymentTypeUseCase)();
        const result = await getPaymentTypeUseCase.execute()

        return response.json(result);
    }
    async remove(request, response) {
        const data = request.body;
        const removePaymentTypeUseCase = new (0, _RemovePaymentTypeUseCase.RemovePaymentTypeUseCase)();
        const result = await removePaymentTypeUseCase.execute(data.id);

        return response.json(result);
    }
} exports.PaymentTypeController = PaymentTypeController;

