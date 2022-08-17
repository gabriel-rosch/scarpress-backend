"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _moment = require('moment'); var _moment2 = _interopRequireDefault(_moment);
var _prismaClient = require('../../database/prismaClient');

 class GetFreightUseCase {
    async execute(data) {
        console.log(data);
        
        const freights = await _prismaClient.prisma.freight.findMany({
            where: {
                valuePaid: {
                    equals: (data.valuePaid == 'true') ? false : undefined,
                },
                clientId: {
                    equals: data.clientId ? data.clientId : undefined
                },
                vehicleId: {
                    equals: data.vehicleId ? data.vehicleId : undefined
                },
                Vehicle: {
                    Employee: {
                        every: {
                            id: {
                                equals: data.employeeId ? data.employeeId : undefined
                            }
                        }
                    }
                },
                date: {
                    lt: data.dates? new Date(_moment2.default.call(void 0, data.dates[1].replace('"','').replace('"','')).format('YYYY-MM-DD')) : undefined,
                    gte: data.dates ? new Date(_moment2.default.call(void 0, data.dates[0].replace('"','').replace('"','')).format('YYYY-MM-DD')) : undefined
                }
            },
            include:{
                Client:true,
                PaymentType:true,
                Vehicle:{
                    include: {
                        Employee:true
                    }
                },
                payments: {
                    select: {
                        id: true,
                        value:true,
                        valuePaid:true,
                        freightId: true
                    }
                }
            }
        });
        
        return freights;
    }
} exports.GetFreightUseCase = GetFreightUseCase;