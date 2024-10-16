import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true } 
});

const bookModel = mongoose.model('Book', bookSchema);
export default bookModel;
