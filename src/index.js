// import dependencies
import express from "express";
const app = express();
app.use(express.json()); // allow use json format

// enviroment variables
import { PORT } from './config.js';

// import routes
import employeesRoutes from "./routes/employees.routes.js"; // employees route
import indexRoutes from "./routes/index.routes.js"; // index route

// using routes
app.use('/api', employeesRoutes);
app.use(indexRoutes);

// if the endpoint doesnt exist
app.use((req, res, next) => {
  res.status(404).json({
    "message": "Endpoint not found"
  });
})

// running server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})