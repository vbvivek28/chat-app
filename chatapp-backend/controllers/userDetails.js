import getUserDetails from "../helpers/getUserDeatils.js";

async function userDetails(req,res){
    try {
        const token = req.cookies.token || "";

     const user= await getUserDetails(token);

     return res.status(200).json({data:user});

        
    } catch (error) {
        return res.status(500).json({
            message:error.message|| error,
            error:true
        })
    }
}

export default userDetails;