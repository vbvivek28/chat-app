import UserModel from "../models/UserModel.js";

async function checkEmail(req,res) {
try{
     const {email }=req.body;
     const checkEmail= await UserModel.findOne({email}).select("-password")
     if(checkEmail){
      return res.status(200).json({
        message:"User found",
        data:checkEmail,
        success:true

      })
     }
     else{
        res.status(400).json({message:"user not found"})
     }
}
catch(err){
res.status(500).json({message:"error"})
}
}

export default checkEmail;