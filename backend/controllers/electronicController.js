import electronicModel from '../models/electronicModel.js';

export const createElectronic = async (req, res) => {
  try {
    const newElectronic = new electronicModel(req.body);
    await newElectronic.save();
    res.status(201).json(newElectronic);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getElectronics = async (req, res) => {
  try {
    const electronics = await electronicModel.find();
    res.status(200).json(electronics);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Incluye más funciones según tus necesidades
