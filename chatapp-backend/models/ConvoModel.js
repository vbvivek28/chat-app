import mongoose from 'mongoose'
const convoSchema =new mongoose.Schema(
    {
        sender:{
            type: mongoose.Schema.ObjectId,
            required: true,
            ref:'User'
        },
        receiver:{
            type: mongoose.Schema.ObjectId,
            required: true,
            ref:'User'
        },
        message:{
            type: mongoose.Schema.ObjectId,
            ref:'Message'
        }
    },
    {timestamps:true}
)

const ConvoModel= new mongoose.Model("Conversation",convoSchema)
 export default ConvoModel;