import moment from "moment";
import {prisma} from "../../database/prismaClient";
export interface TrafficTicketSearch {
    id: string;
    dates: any;
    employeeId: any;
    pending: boolean;
}  
export class GetTrafficTicketsUseCase {
    async execute(data: TrafficTicketSearch | any) {
        
        const trafficTickets = await prisma.trafficTicket.findMany({
            where: {
                pending: {
                    equals: (data.pending == 'true') ? true : undefined,
                },
                employeeId: {
                    equals: data.employeeId ? data.employeeId : undefined
                },
                date: {
                    lt: data.dates? new Date(moment(data.dates[1].replace('"','').replace('"','')).format('YYYY-MM-DD')) : undefined,
                    gte: data.dates ? new Date(moment(data.dates[0].replace('"','').replace('"','')).format('YYYY-MM-DD')) : undefined
                }
            },
            include:{
                Employee: true
            }
        });
        
        return trafficTickets;
    }
}