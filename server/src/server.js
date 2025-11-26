import express from 'express'
import cors from 'cors'
import './config/mongodb.js'
import './config/cloudinary.js'
import 'dotenv/config'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'
import cartRoutes from './routes/cart.routes.js'
import orderRoutes from './routes/order.routes.js'

//app config
const app = express()

//middleware
app.use(express.json())
app.use(cors())

const allowedOrigins = [
  'https://i-own-jersey.vercel.app/',
  'https://i-own-jersey-admin.vercel.app/',
  'http://localhost:5173',
  'http://localhost:5174'
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


//api endpoints
app.use('/api/user', userRoutes)
app.use('/api/product', productRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/order', orderRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`your i-OwnJersey server is running on PORT ${process.env.PORT}`);
})