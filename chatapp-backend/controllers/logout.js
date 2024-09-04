async function logout(req,res){
    try {

        const cookieoptions={
            httpOnly: true,
            secure: true
        }

        return res.cookie("token","",cookieoptions).status(200).json({
            message: "User logged out"
        })
        
    } catch (error) {
        return res.status(404).json({message:"some error occured"})
    }

}

export default logout