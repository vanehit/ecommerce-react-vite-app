import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv'; 

dotenv.config(); // Carga las variables del archivo .env

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares y rutas
app.use(express.json());

// Ejemplo de una ruta de prueba
app.get('/', (req, res) => {
  res.send('API funcionando');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
