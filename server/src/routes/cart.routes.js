import express from 'express'
import { addToCart, getUserCart, updateCart } from '../controllers/cart.controller.js'
import authUser from '../middleware/authUser.js'

const router = express.Router()

router.post('/get', authUser, getUserCart)

router.post('/add', authUser, addToCart)

router.post('/update', authUser, updateCart)

export default router