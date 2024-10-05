import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from "dotenv";
import path from "path";


//files
import connectdb from "./config/db.js"
import userRoutes from "./routes/UserRoute.js"
//configuration
dotenv.config();
connectdb();

const app=express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
const PORT=process.env.PORT || 3000
//routes
app.use('/api/v1/users',userRoutes);
app.listen(PORT,()=>console.log(`SERVER is RUNNING ${PORT}`))