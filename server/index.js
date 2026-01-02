import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import bookingRoutes from './routes/bookings.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/carrental', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Routes
app.use('/api/bookings', bookingRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Car Rental API is running!' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});