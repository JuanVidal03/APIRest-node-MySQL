// import dependencies
import express from "express";
const app = express();
const PORT = 8080; // port


app.get('/', (req, res) => {

  try {
    res.send('Funcion')
  } catch (error) {
    console.log(`Error al acceder la ruta: ${error}`)
  }
})


// launch the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
})