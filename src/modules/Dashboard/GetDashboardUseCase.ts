import { prisma } from "../../database/prismaClient";

export class GetDashboardUseCase {
  async executeVehicle() {
    const vehicles = await prisma.vehicle.findMany({
      where: {
        hourse: true,
      },
      include: {
        Freight: {
          include: {
            payments: true,
          },
        },
      },
    });

    let toPaid = 0.0;
    let paid = 0;

    let vs: any = vehicles;
    console.log(vehicles);

    vs.forEach((vehicle: { Freight: any[]; paid: number; toPaid: number }) => {
      toPaid = 0.0;
      paid = 0;
      vehicle.Freight.forEach((freight) => {
        freight.payments.forEach((payment: { valuePaid: any; value: any }) => {
          if (payment.valuePaid) {
            paid += Number(payment.value);
          } else {
            toPaid += Number(payment.value);
          }
        });
      });
      vehicle.toPaid = toPaid;
      vehicle.paid = paid;
    });

    return vs;
  }
}
