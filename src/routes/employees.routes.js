// import dependencies
import { Router } from "express";

// import controllers
import { getEmployees, createEmployee, updateEmployee, deleteEmployee, getEmployeeById } from "../controllers/employees.controller.js";

const router = Router();


router.get('/empleados', getEmployees); // all empoyees
router.get('/empleado/:id', getEmployeeById); // one empoyee

router.post('/empleados', createEmployee);

router.put('/empleado/:id', updateEmployee);

router.delete('/empleado/:id', deleteEmployee);


export default router;