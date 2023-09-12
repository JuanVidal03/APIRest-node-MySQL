// dependencies
import { connection } from "../db/db.js";

// get all employees
export const getEmployees = async (req, res) => {

  const [ rows ] = await connection.query('SELECT * FROM employee');

  res.send(rows);

};

// get employee bt id
export const getEmployeeById = async (req, res) => {

  // getting the id by params
  const employeeId = req.params.id;

  const [ employee ] = await connection.query(`SELECT * FROM employee WHERE id = ${employeeId}`);

  // in case there is no elements
  employee.length > 0 ? res.send(employee) : res.status(404).json({message: "Employee not found"});

}

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
export const updateEmployee = async (req, res) => {

  // gettiong data from params and body
  const employeeId = req.params.id;
  const { name, salary } = req.body;

  // updating employee
  const [data] = await connection.query(`UPDATE employee SET name = "${name}", salary = ${salary} WHERE id = ${employeeId}`);

  // get the employee updated
  const [employeeUpdatedRow] = await connection.query(`SELECT * FROM employee WHERE id = ${employeeId}`);

  // response
  data.affectedRows ? res.json({ "employee updated": employeeUpdatedRow}) : res.status(404).json({"message": "There is no emplyee wiht that id"})

};

// delete employees
export const deleteEmployee = async (req, res) => {

  const id = req.params.id;

  const [result] = await connection.query(`DELETE FROM employee WHERE id = ${id}`);

  result.affectedRows != 0 ? res.json({ message: "Employee deleted successfully" }) : res.status(404).json({ message: "Employee not found" });

};
