"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _moment = require('moment'); var _moment2 = _interopRequireDefault(_moment);
var _prismaClient = require('../../database/prismaClient');





  
 class GetTrafficTicketsUseCase {
    async execute(data) {
        
        const trafficTickets = await _prismaClient.prisma.trafficTicket.findMany({
            where: {
                pending: {
                    equals: (data.pending == 'true') ? true : undefined,
                },
                employeeId: {
                    equals: data.employeeId ? data.employeeId : undefined
                },
                date: {
                    lt: data.dates? new Date(_moment2.default.call(void 0, data.dates[1].replace('"','').replace('"','')).format('YYYY-MM-DD')) : undefined,
                    gte: data.dates ? new Date(_moment2.default.call(void 0, data.dates[0].replace('"','').replace('"','')).format('YYYY-MM-DD')) : undefined
                }
            },
            include:{
                Employee: true
            }
        });
        
        return trafficTickets;
    }
} exports.GetTrafficTicketsUseCase = GetTrafficTicketsUseCase;