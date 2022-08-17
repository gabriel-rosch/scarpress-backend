import {prisma} from "../../database/prismaClient";


export class UpdateTrafficTicketUseCase {
    async execute(data: any) {
        delete data.Employee
        const trafficTicket = await prisma.trafficTicket.update({
             where: {
                 id: data.id
             },
             data,
             include: {
                 Employee: true
             }
        })
      
        return trafficTicket;
    }
}