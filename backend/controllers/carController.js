import carModel from '../models/carModel.js';

export const createCar = async (req, res) => {
  try {
    const newCar = new carModel(req.body);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getCars = async (req, res) => {
  try {
    const cars = await carModel.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Agrega funciones adicionales según sea necesario
