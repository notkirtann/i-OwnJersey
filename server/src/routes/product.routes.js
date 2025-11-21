import express from 'express'
import {addProduct,getProductById,removeProduct, listProducts} from '../controllers/product.controller.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'
const router = express.Router()


router.get('/list',listProducts)
router.post('/add',adminAuth,upload,addProduct)
router.post('/get',getProductById)
router.post('/remove',adminAuth,removeProduct)

export default router;