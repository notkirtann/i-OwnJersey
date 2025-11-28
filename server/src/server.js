import 'dotenv/config';

import express from 'express';
import cors from 'cors';

import './config/mongodb.js';
import './config/cloudinary.js';

//swagger
import { swaggerUi,swaggerDocument } from './config/swagger.js';

import userRoutes from './routes/user.routes.js';
import productRoutes from './routes/product.routes.js';
import cartRoutes from './routes/cart.routes.js';
import orderRoutes from './routes/order.routes.js';

const app = express();

app.use(express.json());

app.use(cors({
  origin: [
    "https://i-own-jersey.vercel.app",
    "https://i-own-jersey-admin.vercel.app",
    "http://localhost:5173",
    "http://localhost:5174"
  ],
  credentials: true,
  methods: "GET,POST,PUT,DELETE,OPTIONS",
  allowedHeaders: "*",
}));

app.use('/api-docs', swaggerUi.serve,(req,res,next)=>{
  swaggerDocument.servers = [{
    url: `https://i-own-jersey-admin.vercel.app`,
      description: 'Production Server'
  },{
    url: `http://localhost:${process.env.PORT}`,
      description: 'Deployment Server'
  }];
  return swaggerUi.setup(swaggerDocument, {
  customCss: '.swagger-ui .topbar { display: none }',
  customSiteTitle: "i-OwnJersey API Docs",
})(req,res,next)
} );

app.get('/', (req, res) => {
  res.json({ 
    success: true, 
    message: 'API is working!',
    documentation : '/api-docs' 
  });
});

app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);



const PORT = process.env.PORT; 
app.listen(PORT, () => {  console.log(`Server running on PORT ${PORT}`); });

export default app;