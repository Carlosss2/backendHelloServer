import express from 'express';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const app = express();

// Leer variables de entorno
const port = process.env.PORT ;
const serverName = process.env.SERVER_NAME || "Servidor-por-defecto";

// Ruta GET
app.get('/', (req, res) => {
  res.send(`Hola desde servidor ${serverName}`);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
