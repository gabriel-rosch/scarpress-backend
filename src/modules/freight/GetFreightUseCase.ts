import moment from "moment";
import {prisma} from "../../database/prismaClient";

export class GetFreightUseCase {
    async execute(data: any) {
        console.log(data);
        
        const freights = await prisma.freight.findMany({
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
                    lt: data.dates? new Date(moment(data.dates[1].replace('"','').replace('"','')).format('YYYY-MM-DD')) : undefined,
                    gte: data.dates ? new Date(moment(data.dates[0].replace('"','').replace('"','')).format('YYYY-MM-DD')) : undefined
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
}