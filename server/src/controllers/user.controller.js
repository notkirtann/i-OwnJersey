import User from '../models/userModel.js'
import { deleteMail, welcomeMail } from "../emails/account.js";

const registerUser = async (req,res)=>{
    try {
        const user = new User(req.body)
        const token = await user.genAuthToken()
        await user.save();

        //welcome mail
        // await welcomeMail(user.email)

        res.status(201).send({user, token});
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}

const loginUser = async (req,res)=>{
    try {
    const user = await User.findByCredentials(req.body.email, req.body.password)
    const token = await user.genAuthToken()
    res.send({user, token})
  } catch (e) {
    res.status(400).send('Invalid Login')
  }
}

const logoutUser = async (req,res) => {
   try {
    req.user.tokens = req.user.tokens.filter((token)=>{
      return token.token !== req.token 
    })
    await req.user.save()
    res.send('Succesfully Logout')
  } catch (e) {
    res.status(500).send()
  } 
};

const adminLogin = async (req,res) => {
    
}

const getMyProfile = async (req, res) => {
  res.send(req.user)
}

const updateUser = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password'];
  const isValidOperation = updates.every(update => allowedUpdates.includes(update));

  if (!isValidOperation) {
    return res.status(400).send({ error: 'Invalid updates!' });
  }

  try {
    updates.forEach(update => req.user[update] = req.body[update]);
    await req.user.save();
    
    res.send(req.user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    await req.user.deleteOne()
    //welcome mail
    await deleteMail(req.user.email)
    res.send(req.user);
  } catch (error) {
    res.status(500).send({ error: "Internal server error" });
  }
};

export {
    registerUser,
    loginUser,
    logoutUser,
    adminLogin,
    getMyProfile,
    updateUser,
    deleteUser
}