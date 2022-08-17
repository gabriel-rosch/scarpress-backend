"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreateExpenseTypeUseCase = require('./CreateExpenseTypeUseCase');
var _GetExpenseTypeUseCase = require('./GetExpenseTypeUseCase');
var _RemoveExpenseTypeUseCase = require('./RemoveExpenseTypeUseCase');

 class ExpenseTypeController {
    async create(request, response) {
        const data = request.body;
        data.isCommon = (data.isCommon === 'true')
        const createExpenseTypeUseCase = new (0, _CreateExpenseTypeUseCase.CreateExpenseTypeUseCase)();
        const result = await createExpenseTypeUseCase.execute(data)

        return response.json(result);
    }
    async get(request, response) {
        const getExpenseTypeUseCase = new (0, _GetExpenseTypeUseCase.GetExpenseTypeUseCase)();
        const result = await getExpenseTypeUseCase.execute()

        return response.json(result);
    }
    async remove(request, response) {
        const data = request.body;
        const removeExpenseTypeUseCase = new (0, _RemoveExpenseTypeUseCase.RemoveExpenseTypeUseCase)();
        const result = await removeExpenseTypeUseCase.execute(data.id);

        return response.json(result);
    }
} exports.ExpenseTypeController = ExpenseTypeController;

