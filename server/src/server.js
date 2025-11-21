import express from 'express'
import cors from 'cors'
import './config/mongodb.js'
import './config/cloudinary.js'
import 'dotenv/config'
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.routes.js'

//app config
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//api endpoints
app.use('/api/user',userRoutes)
app.use('/api/product',productRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`your i-OwnJersey server is running on PORT ${process.env.PORT}`);
})