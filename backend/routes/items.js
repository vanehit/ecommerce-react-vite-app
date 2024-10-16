import express from 'express';
import Item from '../models/Item.js';  

const router = express.Router();

// Obtener todos los ítems por categoría
router.get('/:categoryId', async (req, res) => {
  try {
    const items = await Item.find({ category: req.params.categoryId });
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Obtener un ítem por su ID
router.get('/item/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    res.json(item);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
