import express from "express";
import dotenv from 'dotenv'
import { DbConnection } from "./config/db";
dotenv.config()

const app = express()
const port = process.env.PORT || 3000

DbConnection()

app.listen(port,()=>{
    console.log(`Server is running on the port ${port}`)
})