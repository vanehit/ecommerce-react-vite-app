import express from 'express';
import carModel from '../models/carModel.js';

const router = express.Router();

// Obtenemos todos los car
router.get('/', async (req, res) => {
    try {
      const books = await carModel.find(); // Obtiene todos los car
      res.status(200).json(books); // Devuelve los car en formato JSON
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

// Obtenemos todos los ítems por categoría
router.get('/:categoryId', async (req, res) => {
  try {
    const items = await carModel.find({ category: req.params.categoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtenemos un ítem por su ID
router.get('/item/:id', async (req, res) => {
  try {
    const item = await carModel.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item no encontrado' });
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creamos un nuevo ítem
router.post('/', async (req, res) => {
  const newItem = new carModel(req.body);
  try {
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Eliminamos un ítem
router.delete('/item/:id', async (req, res) => {
  try {
    const deletedItem = await carModel.findByIdAndDelete(req.params.id);
    if (!deletedItem) return res.status(404).json({ message: 'Item no encontrado' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
