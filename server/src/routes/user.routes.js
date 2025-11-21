import express from 'express'
import {registerUser,loginUser,logoutUser,adminLogin, updateUser, deleteUser,getMyProfile} from '../controllers/user.controller.js'

const router = express.Router()

//post routes
router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/admin',adminLogin)
router.post('/logout',logoutUser)

//get routes
router.get('/me',getMyProfile)

//patch routes
router.patch('/me/update',updateUser)

//delete routes
router.delete('/me',deleteUser)

export default router;