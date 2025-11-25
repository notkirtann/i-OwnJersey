import express from 'express'
import { placeOrder, allOrders, userOrders, updateStatus } from '../controllers/order.controller.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/authUser.js'

const router = express.Router();

// Admin Features
router.post('/list', adminAuth, allOrders)
router.post('/status', adminAuth, updateStatus)

// Payment Features
router.post('/place', authUser, placeOrder)
router.post('/stripe', authUser, placeOrder)
router.post('/razorpay', authUser, placeOrder)

// User Features
router.post('/userorders', authUser, userOrders)

export default router;