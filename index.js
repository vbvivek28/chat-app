import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/connectDB.js';
import router from './routes/index.js';

connectDB().then(()=>{console.log("connected ")});
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))

app.get('/', (req,res)=>{
res.json({
    message: "welcome to the root route"
})
})

app.use('/api',router)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})




