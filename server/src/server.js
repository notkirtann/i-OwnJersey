import 'dotenv/config';   // MUST BE FIRST

import express from 'express';
import cors from 'cors';

import './config/mongodb.js';
import './config/cloudinary.js';

import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';
import orderRoutes from './routes/order.routes.js';

const app = express();

app.use(cors({
  origin: ['https://i-own-jersey.vercel.app', 'http://localhost:5173'],
  credentials: true
}));

app.options('*', cors());

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ success: true, message: 'API is working!' });
});

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: err.message || 'Something went wrong!'
  });
});

export default app;
