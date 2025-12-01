import express from 'express'
import {registerUser,loginUser,logoutUser,adminLogin, updateUser, deleteUser,getMyProfile} from '../controllers/user.controller.js'
import authUser from '../middleware/authUser.js'

const router = express.Router()

//post routes
router.post('/register',registerUser)
router.post('/login',loginUser)
router.post('/admin',adminLogin)
router.post('/logout',authUser,logoutUser)

//get routes
router.get('/me',authUser,getMyProfile)

//patch routes
router.patch('/me/update',authUser,updateUser)

//delete routes
router.delete('/me',authUser,deleteUser)

export default router;