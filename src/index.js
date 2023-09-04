// import dependencies
import express from "express";
const app = express();
const PORT = 8080; // port
app.use(express.json()); // allow use json format

// import routes
import employeesRoutes from "./routes/employees.routes.js"; // employees route
import indexRoutes from "./routes/index.routes.js"; // index route

// using routes
app.use('/api', employeesRoutes);
app.use(indexRoutes),

// running server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})