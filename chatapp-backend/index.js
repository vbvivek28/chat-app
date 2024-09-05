import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import { connectDB } from './config/connectDB.js';
import router from './routes/index.js';
import cookieParser from 'cookie-parser';
connectDB().then(()=>{console.log("connected ")});
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin:process.env.FRONTEND_URL,
    credentials:true
}))
app.use(cookieParser());

app.get('/', (req,res)=>{
res.json({
    message: "welcome to the root route"
})
})

app.use('/api',router)

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})




