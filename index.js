// import dependencies
import express from "express";
const app = express();
const PORT = 8080; // port


app.get('/empleados', (req, res) => res.send('Viendo empleados'));
app.post('/empleados', (req, res) => res.send('Creando empleados'));
app.put('/empleados', (req, res) => res.send('actualizando empleados'));
app.delete('/empleados', (req, res) => res.send('Eliminando empleados'));


// running server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})