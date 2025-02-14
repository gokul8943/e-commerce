import express,{Request,Response} from 'express';
import  usermodel  from '../models/user/user.model'


export const regiter = async(req:Request,res:Response) =>{
    try {
        const userData =  req.body
        const {name,email,password,phone} = userData;
        if(!name || !email || !password || !phone){
            return res.status(400)
        }
        const userDetails = await usermodel.findOne({email});
          if(userDetails){
            return res.status(400).json({message:"User already exists"});
          }
            const user = await usermodel.create(userData);
            if(user){
                return res.status(200).json({message:"User registered successfully",user})
            }else{
                return res.status(400).json({message:"User registration failed"});
            }
    } catch (error:any) {
        console.log(error);
        return res.status(500).json({message:error.message});
    }
}