import mongoose from 'mongoose';


export async function connectDB (){

   try{

 
   const connection = mongoose.connection

   connection.on('connected',()=>{
    console.log("connecting to DB")})

    connection.on('error',()=>{
        console.log("Something erong in mongodb",error)})

    await mongoose.connect(process.env.MONGODB_URL);
   }



catch(error){
    console.log('UNexpected errror occured',error);
}

} 
