// dependencies
import { connection } from "../db/db.js";

// get employees
export const getEmployees = (req, res) => res.send('Viendo empleados');

// post employees
export const createEmployee = async (req, res) => {
  
  // getting the data
  const { name, salary } = req.body;

  const [ post ]   = await connection.query('INSERT INTO employee (name, salary) VALUES (?,?)', [name, salary]);
  
  res.send({
    id: post.insertId,
    name,
    salary
  });
};

// put employees
export const updateEmployee = (req, res) => res.send('Actualizando empleados');

// delete employees
export const deleteEmployee = (req, res) => res.send('Eliminando empleados');