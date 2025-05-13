import jwt from "jsonwebtoken";
import { User } from "../models/userModel.js";

export const authUser = async (req,res,next) => {
    const token = req.headers.authorization.split(' ')[1];
    console.log(token)

    if(!token) {
        return res.status(401).json({
            "message": "unauthorized"
        })
    }

    try {
        const decoded = jwt.verify(token,"mysecretkey");
        console.log(decoded)
        req.user = await User.findOne({email:decoded.email});
        next();
        
    } catch (error) {
        console.log("error in authUser: ",error)
        res.status(401).json({
            "message": "unauthorized"
        })
    }
    



}