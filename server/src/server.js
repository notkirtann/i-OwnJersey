import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import './config/mongodb.js'

//app config
const app = express()

//middleware
app.use(express.json())
app.use(cors())

//api endpoints

app.listen(process.env.PORT,()=>{
    console.log(`your i-OwnJersey server is running on PORT ${process.env.PORT}`);
    
})