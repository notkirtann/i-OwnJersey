import express from 'express'
import cors from 'cors'
import './config/mongodb.js'
import './config/cloudinary.js'
import 'dotenv/config'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'
import orderRoutes from './routes/order.routes.js'

const app = express()

const allowedOrigins = [
  'https://i-own-jersey.vercel.app',
  'https://i-own-jersey-admin.vercel.app',
  'http://localhost:5173',
  'http://localhost:5174'
];

const corsOptions = {
  origin: function(origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'token'],
  exposedHeaders: ['Content-Length', 'X-Request-Id'],
  maxAge: 600 
};


app.use(cors(corsOptions));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,PATCH,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization,token');
  
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});
app.options('*', cors(corsOptions));

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ success: true, message: 'API is working!' });
});

// API endpoints
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/order', orderRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    success: false, 
    message: err.message || 'Something went wrong!' 
  });
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});