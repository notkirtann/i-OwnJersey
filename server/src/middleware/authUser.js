import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';

const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers;

        if (!token) {
            return res.json({ success: false, message: 'Not Authorized Login Again' });
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ 
            _id: token_decode._id,  
            'tokens.token': token 
        });
        
         if (!user) {
            return res.json({ success: false, message: 'User not found' });
        }
        // Add the decoded user ID to the request body
        // This will allow controllers to access req.body.userId without the frontend sending it manually
        // req.body.userId = token_decode._id;
        req.token = token;
        req.user = user;
        req.body.userId = user._id.toString();
        
        next();

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export default authUser;