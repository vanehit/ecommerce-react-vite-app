import bookModel from '../models/bookModel.js';

export const getBooks = async (req, res) => {
    try {
      const books = await bookModel.find(); // Obtiene todos los libros
      res.status(200).json(books); // Devuelve los libros en formato JSON
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const createBook = async (req, res) => {
  try {
    const newBook = new bookModel(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};



// Puedes agregar más funciones como updateBook y deleteBook aquí
