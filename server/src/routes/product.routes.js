import express from 'express'
import {addProduct,listProduct,getProductById,removeProduct} from '../controllers/product.controller.js'
const router = express.Router()


router.get('/allproducts',listProduct)
router.post('',addProduct)
router.post('',getProductById)
router.post('',removeProduct)

export default router;