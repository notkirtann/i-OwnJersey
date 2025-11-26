import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import './config/mongodb.js';
import './config/cloudinary.js';

import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';
import orderRoutes from './routes/order.routes.js';

const app = express();

app.use(express.json());

app.use(cors({
  origin: ['https://i-own-jersey.vercel.app',
  'https://i-own-jersey-admin.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174'],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get('/', (req, res) => {
  res.json({ success: true, message: 'API is working!' });
});

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

export default app;

// const PORT = process.env.PORT || 8000; 
// app.listen(PORT, () => {  console.log(`Server running on PORT ${PORT}`); });