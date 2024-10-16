import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  category: String,
  img: String,
});

const Item = mongoose.model('Item', itemSchema);

export default Item;
