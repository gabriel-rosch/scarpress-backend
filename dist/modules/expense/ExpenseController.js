"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreateExpenseUseCase = require('./CreateExpenseUseCase');
var _GetExpenseUseCase = require('./GetExpenseUseCase');
var _RemoveExpenseUseCase = require('./RemoveExpenseUseCase');

 class ExpenseController {
    async create(request, response) {
        const data = request.body;
        const createExpenseUseCase = new (0, _CreateExpenseUseCase.CreateExpenseUseCase)();
        const result = await createExpenseUseCase.execute(data)

        return response.json(result);
    }
    async get(request, response) {
        const getExpenseUseCase = new (0, _GetExpenseUseCase.GetExpenseUseCase)();
        const result = await getExpenseUseCase.execute()

        return response.json(result);
    }
    async remove(request, response) {
        const data = request.body;
        const removeExpenseUseCase = new (0, _RemoveExpenseUseCase.RemoveExpenseUseCase)();
        const result = await removeExpenseUseCase.execute(data.id);

        return response.json(result);
    }
} exports.ExpenseController = ExpenseController;

