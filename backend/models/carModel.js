import mongoose from 'mongoose';

const carSchema = new mongoose.Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  img: { type: String, required: true },
  description: { type: String, required: true },
});

const carModel = mongoose.model('Car', carSchema);
export default carModel;