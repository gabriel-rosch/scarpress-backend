"use strict";
exports.__esModule = true;
exports.routes = void 0;
var express_1 = require("express");
var AuthenticateClientController_1 = require("./modules/acount/authenticateClient/AuthenticateClientController");
var CreateUserController_1 = require("./modules/user/useCases/CreateUserController");
var VehicleController_1 = require("./modules/vehicle/VehicleController");
var ClientController_1 = require("./modules/client/ClientController");
var ExpenseTypeController_1 = require("./modules/expenseType/ExpenseTypeController");
var ExpenseController_1 = require("./modules/expense/ExpenseController");
var PaymentTypeController_1 = require("./modules/paymentType/PaymentTypeController");
var PaymentController_1 = require("./modules/payment/PaymentController");
var EmployeeController_1 = require("./modules/Employee/EmployeeController");
var TrafficTicketController_1 = require("./modules/trafficTicket/TrafficTicketController");
var FreightController_1 = require("./modules/freight/FreightController");
var DashboardController_1 = require("./modules/Dashboard/DashboardController");
var routes = (0, express_1.Router)();
exports.routes = routes;
var createUserController = new CreateUserController_1.CreateUserController();
var vehicleController = new VehicleController_1.VheiceController();
var clientController = new ClientController_1.ClientController();
var authenticateClientController = new AuthenticateClientController_1.AuthenticateClientController();
var expenseTypeController = new ExpenseTypeController_1.ExpenseTypeController();
var expenseController = new ExpenseController_1.ExpenseController();
var paymentTypeController = new PaymentTypeController_1.PaymentTypeController();
var employeeController = new EmployeeController_1.EmployeeController();
var trafficTicketController = new TrafficTicketController_1.TrafficTicketController();
var freightController = new FreightController_1.FreightController();
var paymentController = new PaymentController_1.PaymentController();
var dashboardController = new DashboardController_1.DashboardController();
routes.post('/user/', createUserController.handle);
routes.post('/authenticate', authenticateClientController.handle);
routes.post('/vehicle/', vehicleController.create);
routes.get('/vehicle/', vehicleController.get);
routes["delete"]('/vehicle/', vehicleController.remove);
routes.post('/client/', clientController.create);
routes.get('/client/', clientController.get);
routes["delete"]('/client/', clientController.remove);
//routes.post('/authenticate',ensureAuthenticateClient, authenticateClientController.handle);
routes.post('/expenseType/', expenseTypeController.create);
routes.get('/expenseType/', expenseTypeController.get);
routes["delete"]('/expenseType/', expenseTypeController.remove);
routes.post('/expense/', expenseController.create);
routes.get('/expense/', expenseController.get);
routes["delete"]('/expense/', expenseController.remove);
routes.post('/paymentType/', paymentTypeController.create);
routes.get('/paymentType/', paymentTypeController.get);
routes["delete"]('/paymentType/', paymentTypeController.remove);
routes.post('/employee/', employeeController.create);
routes.get('/employee/', employeeController.get);
routes["delete"]('/employee/', employeeController.remove);
routes.post('/trafficTicket/', trafficTicketController.create);
routes.get('/trafficTicket/', trafficTicketController.get);
routes["delete"]('/trafficTicket/', trafficTicketController.remove);
routes.put('/trafficTicket/', trafficTicketController.update);
routes.post('/freight/', freightController.create);
routes.get('/freight/', freightController.get);
routes["delete"]('/freight/', freightController.remove);
routes.put('/freight/', freightController.update);
routes.put('/payments', paymentController.updateMany);
routes.get('/dashboardVehicle/', dashboardController.getVehicles);
//# sourceMappingURL=router.js.map