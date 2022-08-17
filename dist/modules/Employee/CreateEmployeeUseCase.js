"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class CreateEmployeeUseCase {
    async execute(data) {
        const employeeExist = await _prismaClient.prisma.employee.findFirst({
            where: {
                name: {
                    equals: data.name,
                    mode: "insensitive"
                }
            }
        })
        if(employeeExist) {
            throw new Error("Nome já cadastrado!")
        }
       
        const employee = await _prismaClient.prisma.employee.create({
            data
        })
      
        return employee;
    }
} exports.CreateEmployeeUseCase = CreateEmployeeUseCase;