import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken";
async function checkPassword(req,res){
    try {
        const {password ,userId}=req.body;
        const user = await UserModel.findById(userId);
         const verifyPassword= await bcrypt.compare(password,user.password);

          const tokenData = {
           id: user._id,
           email:user.email
           }

             const token = jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:'1d'})
           
             const cookieOption= {
                HttpOnly: true,
                secure:true
             }
        if(verifyPassword){
            return res.cookie("token",token,cookieOption).status(200).json({
                message:"user login successfully",
                token:token,
                success:true

            })
           
        }else{
            return res.status(400).json({
                message:"user login failed  check password"
                
            })
        }
    } catch (error) {
        return res.status(500).json({
            message:"server error"
            
        })
    }
}
export default checkPassword;