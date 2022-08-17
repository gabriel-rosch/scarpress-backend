import {prisma} from "../../database/prismaClient";

import moment from "moment";
export class CreateExpenseUseCase {
    async execute(data: any) {
        let expenses = [];
        
        const installments = Number(data.installments || 1)
        
        if(installments > 1) {
            data.value = String(Number(data.value) / Number(installments))
            for (let i = 0; i < installments; i++) {
                let auxDate = data.dueDate;
                data.dueDate = moment(data.dueDate).add(i, "months").toISOString()
                 
                let expense = await prisma.expense.create({
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
            const expense = await prisma.expense.create({
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
}