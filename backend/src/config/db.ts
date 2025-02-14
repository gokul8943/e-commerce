import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

export const DbConnection = async () => {
    try {
        const mongoUrl: string = process.env.MONGO_URI!  

        if (!mongoUrl) {
            console.error('MongoDB connection URL is not defined.');
            process.exit(1);
          }
        mongoose.connect(mongoUrl).then(()=>{
            console.log('database connected..');
        })
           
    } catch (error:any) {
        console.log("Database connection error", error);  
    }
}
