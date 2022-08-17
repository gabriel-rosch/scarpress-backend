import {prisma} from "../../database/prismaClient";

interface ICreateTrafficTicket {
    name: string;
    date: string;
    value: number;
    employeeId: string;
}

export class CreateTrafficTicketUseCase {
    async execute(data: ICreateTrafficTicket) {
        console.log(data);
        const trafficTicket = await prisma.trafficTicket.create({
             data,
             include: {
                Employee: true
             }
        })
      
        return trafficTicket;
    }
}