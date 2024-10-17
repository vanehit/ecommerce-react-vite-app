import express from 'express';
import bookModel from '../models/bookModel.js';
import carModel from '../models/carModel.js';
import electronicModel from '../models/electronicModel.js';

const router = express.Router();

// Esta ruta es para obtener todos los productos
router.get('/all-products', async (req, res) => {
  try {
    // Obtenemos todos los productos de cada categoría
    const books = await bookModel.find();
    const cars = await carModel.find();
    const electronics = await electronicModel.find();

    // Combinamos todos los productos en un solo arreglo
    const allProducts = [...books, ...cars, ...electronics];

    res.status(200).json(allProducts); // Enviamos todos los productos al frontend
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
