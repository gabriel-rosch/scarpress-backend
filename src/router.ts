import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { AuthenticateClientController } from "./modules/acount/authenticateClient/AuthenticateClientController";
import { CreateUserController } from "./modules/user/useCases/CreateUserController";
import { VheiceController } from "./modules/vehicle/VehicleController";
import { ClientController } from "./modules/client/ClientController";
import { ExpenseTypeController } from "./modules/expenseType/ExpenseTypeController";
import { ExpenseController } from "./modules/expense/ExpenseController";
import { PaymentTypeController } from "./modules/paymentType/PaymentTypeController";
import { PaymentController } from "./modules/payment/PaymentController";
import { EmployeeController } from "./modules/Employee/EmployeeController";
import { TrafficTicketController } from "./modules/trafficTicket/TrafficTicketController";
import { FreightController } from "./modules/freight/FreightController";
import { DashboardController } from "./modules/Dashboard/DashboardController";


const routes = Router();

const createUserController = new CreateUserController();
const vehicleController = new VheiceController();
const clientController = new ClientController()
const authenticateClientController = new AuthenticateClientController();
const expenseTypeController = new ExpenseTypeController();
const expenseController = new ExpenseController();
const paymentTypeController = new PaymentTypeController();
const employeeController = new EmployeeController();
const trafficTicketController = new TrafficTicketController();
const freightController = new FreightController();
const paymentController = new PaymentController();
const dashboardController = new DashboardController();







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


export { routes }