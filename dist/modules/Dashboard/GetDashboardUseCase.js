"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _prismaClient = require('../../database/prismaClient');

 class GetDashboardUseCase {
  async executeVehicle() {
    const vehicles = await _prismaClient.prisma.vehicle.findMany({
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

    let vs = vehicles;
    console.log(vehicles);

    vs.forEach((vehicle) => {
      toPaid = 0.0;
      paid = 0;
      vehicle.Freight.forEach((freight) => {
        freight.payments.forEach((payment) => {
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
} exports.GetDashboardUseCase = GetDashboardUseCase;
