"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class GetEmployeesUseCase {
    async execute(data) {
        let employees = null;
        if(data.occupation) {
            employees= await _prismaClient.prisma.employee.findMany({
                where: {
                    occupation: data.occupation
                }    
            });
        } else {
            employees = await _prismaClient.prisma.employee.findMany();
        }
        return employees;
    }
} exports.GetEmployeesUseCase = GetEmployeesUseCase;

