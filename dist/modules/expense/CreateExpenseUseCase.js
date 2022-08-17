"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _prismaClient = require('../../database/prismaClient');

var _moment = require('moment'); var _moment2 = _interopRequireDefault(_moment);
 class CreateExpenseUseCase {
    async execute(data) {
        let expenses = [];
        
        const installments = Number(data.installments || 1)
        
        if(installments > 1) {
            data.value = String(Number(data.value) / Number(installments))
            for (let i = 0; i < installments; i++) {
                let auxDate = data.dueDate;
                data.dueDate = _moment2.default.call(void 0, data.dueDate).add(i, "months").toISOString()
                 
                let expense = await _prismaClient.prisma.expense.create({
                    data,
                    include: {
                        ExpenseType: true,
                        Freight: true,
                        Vehicle: true,
                    }
                    
                })       
                data.dueDate = auxDate;
                expenses.push(expense)
            }   
        } else {
            data.installments = String(installments);
            const expense = await _prismaClient.prisma.expense.create({
                data,
                include: {
                    ExpenseType: true,
                    Freight: true,
                    Vehicle: true,
                }
            })
            expenses.push(expense)
        }
      
        return expenses;
    }
} exports.CreateExpenseUseCase = CreateExpenseUseCase;