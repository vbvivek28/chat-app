import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

export default async function resgisterUser(req,res){
    try{
        const {name, email, password, profile_pic}=req.body;
        const checkEmail =await UserModel.findOne({email})
        
        if(checkEmail){
            return res.status(400).json(
                {
                message: "user already exists",
                error:true
            }
        )
        }

        const salt= await bcrypt.genSalt(10)
        const hashpassword= await bcrypt.hash(password, salt)

        const payload={
          name,
          email,
          profile_pic,
          password:hashpassword    
        }
        const user = new UserModel(payload);
        const userSave = await user.save()
        return res.status(201).json({
            message:"User registered successfully",
            data: userSave,
            success: true
        })
    }
    catch(err){
        return res.status(500).json({
            message: err.message || err,
            error: true
        })
    }
}

