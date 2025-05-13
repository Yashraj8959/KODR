import { User } from "../models/userModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginController = (req,res)=>{

}
export const registerController = async (req,res)=>{
    try {
        const { email, name, password} = req.body;
        if(!email || !name || !password){
            return res.status(400).send("All fields are required")
        }
        const existingUser = await User.findOne({email});
        if(existingUser) {
            return res.status(400).send("User already exist")
        }
        const hashedPassword = await bcrypt.hash(password,10);
    
        const newUser = await User.create({
            email, name, password:hashedPassword
        })
        const token = jwt.sign({email},"mysecretkey")
        
        res.status(201).send({newUser,token});
        
    } catch (error) {
        console.log(error)
    }
}
