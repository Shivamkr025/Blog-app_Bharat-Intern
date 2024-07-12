import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import userRouter from './src/Routers/userRouter.js';
import blogRouter from './src/Routers/blogRouter.js';

dotenv.config();

const PORT = process.env.PORT || 7011;
const app = express()

app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}))

app.use(express.json())
app.use(cookieParser())
app.use('/', userRouter)
app.use('/', blogRouter)


mongoose.connect('mongodb://localhost:27017/Blog-app')
    .then(() => {
        console.log("connecting successfully...");
    }).catch((error) => {
        console.log(error);
    })


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
})
