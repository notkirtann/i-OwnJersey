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
  origin: ['https://i-own-jersey.vercel.app', 'http://localhost:5173'],
  credentials: true
}));


app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://i-own-jersey.vercel.app");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  if (req.method === "OPTIONS") return res.status(200).end();
  next();
});

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