import userModel from "../models/UserModel";

async function resgisterUser(req,res){
    try{
        const {name, email, password, profile_pic}=req.body;
        const checkEmail =await userModel.findObe({email})
        
        if(checkEmail){
            return res.status(400).json(
                {
                message: " user already exists",
                error:true
            }
        )
        }

    }
    catch(err){
        return res.status(500).json({
            message: error.message || error,
            error: true
        })
    }
}