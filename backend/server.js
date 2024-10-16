import express from 'express';
import connectDB from './config/database.js';
import dotenv from 'dotenv'; 
import bookRoutes from './routes/bookRoutes.js';
import carRoutes from './routes/carRoutes.js';
import electronicRoutes from './routes/electronicRoutes.js';


dotenv.config(); // Cargamos las variables del archivo .env

const app = express();

// Conectamos a la base de datos
connectDB();

// Middlewares y rutas
app.use(express.json());

// Ejemplo de una ruta de prueba
app.get('/', (req, res) => {
  res.send('Bienvenidos a ecommerce-react-app');
});

// Usar las rutas
app.use('/api/books', bookRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/electronics', electronicRoutes);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
