"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');


 class UpdateFreightUseCase {
    async updateValuePaid(id, data) {
        console.log(id,data);
        
        await _prismaClient.prisma.freight.update({
            where: {
                id
            },
            data: {  
                valuePaid: data
            }
       })
    }

    async execute(data) {
        let payments = data.Payment;
        delete data.Payment;
        
        
        console.log(data);
     
        const freight = await _prismaClient.prisma.freight.update({
             where: {
                 id: data.id
             },
             data: { 
                 ...data,
             },
             include: {
                 payments:true,
                 Client:true,
                 Vehicle:true,
                 PaymentType:true,
             }
        })
      
        return freight;
    }
} exports.UpdateFreightUseCase = UpdateFreightUseCase;