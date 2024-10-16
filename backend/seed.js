import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import fs from 'fs';
import bookModel from './models/bookModel.js';
import carModel from './models/carModel.js'; // Importa el modelo para cars
import electronicModel from './models/electronicModel.js'; // Importa el modelo para electronics

dotenv.config();

const seedItems = async () => {
  await connectDB();

  // Limpiamos las colecciones antes de agregar nuevos productos
  await bookModel.deleteMany();
  await carModel.deleteMany(); 
  await electronicModel.deleteMany(); 

  // Lee los datos desde data.json
  const data = JSON.parse(fs.readFileSync('../public/data.json', 'utf8'));

  // Insertamos los libros
  const books = data.books.map(book => ({
    title: book.title,
    author: book.author,
    price: book.price,
    stock: book.stock,
    img: book.img,
    description: book.description,
    category: "books",
  }));
  await bookModel.insertMany(books);
  console.log('Libros cargados exitosamente');

  // Insertamos los autos
  const cars = data.cars.map(car => ({
    make: car.make,
    model: car.model,
    price: car.price,
    stock: car.stock,
    img: car.img,
    description: car.description,
    category: "cars",
  }));
  await carModel.insertMany(cars);
  console.log('Autos cargados exitosamente');

  // Insertamos los electrónicos
  const electronics = data.electronics.map(electronic => ({
    name: electronic.name, 
    brand: electronic.brand,
    price: electronic.price,
    stock: electronic.stock,
    img: electronic.img,
    description: electronic.description,
    category: "electronics",
  }));
  await electronicModel.insertMany(electronics);
  console.log('Electrónicos cargados exitosamente');

  // cerramos la conexión
  mongoose.connection.close();
};

seedItems();
