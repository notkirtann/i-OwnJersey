// import dotenv from 'dotenv'
// dotenv.config()
import 'dotenv/config'

import mongoose from 'mongoose'
const url = process.env.MONGODB_URI

console.log("Connecting to MongoDB:....");

mongoose.connect(url)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((e) => {
    console.error("MongoDB connection failed:----------------->X X X X X X", e);
    process.exit(1);
  });