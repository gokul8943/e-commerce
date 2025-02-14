import express from "express";
import dotenv from 'dotenv'
import { DbConnection } from "./config/db";
import userRouter from "./routes/user.routes";
import cors from 'cors'

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

DbConnection()

const corsOptions = {
    origin: ['http://localhost:5173','http://localhost:5174'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  };

app.use(express.json({ limit: '20mb' }));
app.use(express.urlencoded({ limit: '20mb', extended: true }));
app.use(cors(corsOptions))
app.use('/api/user', userRouter)

app.listen(port, () => {
    console.log(`Server is running on the port ${port}`)
})