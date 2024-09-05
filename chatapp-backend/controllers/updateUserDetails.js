import getUserDetails from "../helpers/getUserDeatils.js";
import UserModel from "../models/UserModel.js";

async function updateUserDetails(req,res){
    try {
        const token=req.cookies.token || "";
        const user= await getUserDetails(token);
   console.log(user);
        const {name,profile_pic}=req.body;
        const updateUser= await UserModel.updateOne({_id:user._id},{
            name,
            profile_pic
        });

        const userinfo= await UserModel.findOne({_id:user._id});

        console.log(userinfo);
        return res.status(200).json({
            message:"User updated successfully",
            data: userinfo
        })

    } catch (error) {
        return res.status(200).json({
        message:"error"
    })
}
}

export default updateUserDetails;