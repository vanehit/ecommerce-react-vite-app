import mongoose from 'mongoose';

// Configuración para conectar a MongoDB Atlas
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Atlas conectado');
  } catch (error) {
    console.error('Error al conectar a MongoDB', error);
    process.exit(1); // Detener la app si falla la conexión
  }
};

export default connectDB;

