import mongoose from 'mongoose'

const messageSchema = new mongoose.Schema(
 {
   text:{
    type: String,
    default:""
   },
   imageUrl:{
    type: String,
    defauult:""
   },
   videoUrl:{
    type: String,
    default: ""
   },
   seen:{
    type: Boolean,
    default: false
   }
 },{
    timestamps:true
 }
)

const MessageModel =mongoose.model("Message", messageSchema)
export default MessageModel;