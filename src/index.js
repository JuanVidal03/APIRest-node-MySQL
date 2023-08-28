// import dependencies
import express from "express";
const app = express();
const PORT = 8080; // port

// import db connection
import { connection } from "./db/db.js";

app.get('/ping', async (req, res) => {

  const [result] = await connection.query('SELECT "pong" AS result');
  res.json(result);

})

app.get('/empleados', (req, res) => res.send('Viendo empleados'));
app.post('/empleados', (req, res) => res.send('Creando empleados'));
app.put('/empleados', (req, res) => res.send('actualizando empleados'));
app.delete('/empleados', (req, res) => res.send('Eliminando empleados'));


// running server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})