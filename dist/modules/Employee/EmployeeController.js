"use strict";Object.defineProperty(exports, "__esModule", {value: true});
var _CreateEmployeeUseCase = require('./CreateEmployeeUseCase');
var _GetEmployeesUseCase = require('./GetEmployeesUseCase');
var _RemoveEmployeeUseCase = require('./RemoveEmployeeUseCase');


 class EmployeeController {
    async create(request, response) {
        const data = request.body;
        const createEmployeeUseCase = new (0, _CreateEmployeeUseCase.CreateEmployeeUseCase)();
        const result = await createEmployeeUseCase.execute(data)

        return response.json(result);
    }
    async get(request, response) {
        const getEmployeeUseCase = new (0, _GetEmployeesUseCase.GetEmployeesUseCase)();
        const result = await getEmployeeUseCase.execute(request.query)

        return response.json(result);
    }
    async remove(request, response) {
        const data = request.body;
        const removeEmployeeUseCase = new (0, _RemoveEmployeeUseCase.RemoveEmployeeUseCase)();
        const result = await removeEmployeeUseCase.execute(data.id);

        return response.json(result);
    }
    
} exports.EmployeeController = EmployeeController;

