"use strict";Object.defineProperty(exports, "__esModule", {value: true});var _express = require('express');

var _AuthenticateClientController = require('./modules/acount/authenticateClient/AuthenticateClientController');
var _CreateUserController = require('./modules/user/useCases/CreateUserController');
var _VehicleController = require('./modules/vehicle/VehicleController');
var _ClientController = require('./modules/client/ClientController');
var _ExpenseTypeController = require('./modules/expenseType/ExpenseTypeController');
var _ExpenseController = require('./modules/expense/ExpenseController');
var _PaymentTypeController = require('./modules/paymentType/PaymentTypeController');
var _PaymentController = require('./modules/payment/PaymentController');
var _EmployeeController = require('./modules/Employee/EmployeeController');
var _TrafficTicketController = require('./modules/trafficTicket/TrafficTicketController');
var _FreightController = require('./modules/freight/FreightController');
var _DashboardController = require('./modules/Dashboard/DashboardController');


const routes = _express.Router.call(void 0, );

const createUserController = new (0, _CreateUserController.CreateUserController)();
const vehicleController = new (0, _VehicleController.VheiceController)();
const clientController = new (0, _ClientController.ClientController)()
const authenticateClientController = new (0, _AuthenticateClientController.AuthenticateClientController)();
const expenseTypeController = new (0, _ExpenseTypeController.ExpenseTypeController)();
const expenseController = new (0, _ExpenseController.ExpenseController)();
const paymentTypeController = new (0, _PaymentTypeController.PaymentTypeController)();
const employeeController = new (0, _EmployeeController.EmployeeController)();
const trafficTicketController = new (0, _TrafficTicketController.TrafficTicketController)();
const freightController = new (0, _FreightController.FreightController)();
const paymentController = new (0, _PaymentController.PaymentController)();
const dashboardController = new (0, _DashboardController.DashboardController)();





routes.get('/',(req,res) => {
    return res.json({message:'Server UP'})
});

routes.post('/user/',createUserController.handle);
routes.post('/authenticate', authenticateClientController.handle);

routes.post('/vehicle/', vehicleController.create);
routes.get('/vehicle/', vehicleController.get);
routes.delete('/vehicle/', vehicleController.remove);

routes.post('/client/', clientController.create);
routes.get('/client/', clientController.get);
routes.delete('/client/', clientController.remove);
//routes.post('/authenticate',ensureAuthenticateClient, authenticateClientController.handle);

routes.post('/expenseType/', expenseTypeController.create);
routes.get('/expenseType/', expenseTypeController.get);
routes.delete('/expenseType/', expenseTypeController.remove);

routes.post('/expense/', expenseController.create);
routes.get('/expense/', expenseController.get);
routes.delete('/expense/', expenseController.remove);

routes.post('/paymentType/', paymentTypeController.create);
routes.get('/paymentType/', paymentTypeController.get);
routes.delete('/paymentType/', paymentTypeController.remove);

routes.post('/employee/', employeeController.create);
routes.get('/employee/', employeeController.get);
routes.delete('/employee/', employeeController.remove);

routes.post('/trafficTicket/', trafficTicketController.create);
routes.get('/trafficTicket/', trafficTicketController.get);
routes.delete('/trafficTicket/', trafficTicketController.remove);
routes.put('/trafficTicket/', trafficTicketController.update);

routes.post('/freight/', freightController.create);
routes.get('/freight/', freightController.get);
routes.delete('/freight/', freightController.remove);
routes.put('/freight/', freightController.update);

routes.put('/payments', paymentController.updateMany);

routes.get('/dashboardVehicle/', dashboardController.getVehicles);


exports.routes = routes;