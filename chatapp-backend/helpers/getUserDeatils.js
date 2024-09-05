import UserModel from "../models/UserModel.js"
import jwt from "jsonwebtoken"

const getUserDetails= async (token)=>{

        if(!token){
            return{
                message:"session out",
                logout:true
            }
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)

        const user= await UserModel.findById(decode.id).select("-password")
console.log(user)
        return user;

}
export default getUserDetails