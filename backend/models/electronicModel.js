import mongoose from 'mongoose';

const electronicSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
});

const electronicModel = mongoose.model('Electronic', electronicSchema);
export default electronicModel;
