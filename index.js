import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/connectDB.js';
connectDB().then(()=>{console.log("connected ")});
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})




