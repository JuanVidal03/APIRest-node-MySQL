// import dependencies
import { Router } from "express";

// import controllers
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employees.controller.js";

const router = Router();


router.get('/empleados', getEmployees);
router.post('/empleados', createEmployee);
router.put('/empleados', updateEmployee);
router.delete('/empleados', deleteEmployee);


export default router;