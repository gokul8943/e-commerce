import express, { Request, Response } from 'express';
import usermodel from '../models/user/user.model'
import bcrypt from 'bcryptjs/types';
import jwt from 'jsonwebtoken'


const jwtSecret = process.env.JWT_SECRET!

export const register = async (req: Request, res: Response) => {
    try {
        const userData = req.body
        const { name, email, password, phone } = userData;
        if (!name || !email || !password || !phone) {
            return res.status(400)
        }
        const userDetails = await usermodel.findOne({ email });
        if (userDetails) {
            return res.status(400).json({ message: "User already exists" });
        }
        const user = await usermodel.create(userData);
        if (user) {
            return res.status(200).json({ message: "User registered successfully", user })
        } else {
            return res.status(400).json({ message: "User registration failed" });
        }
    } catch (error: any) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
}

export const login = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" })
        }
        const user = await usermodel.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {

            const accessToken = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '30m' });
            const refreshToken = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '30m' });
            const { password, ...userWithoutPassword } = user.toObject();

            return res.status(200).json({ message: "Login Sucessfull", accessToken, refreshToken, user: userWithoutPassword  })
        } else {

            return res.status(200).json({ message: "Login failed", user })
        }

    } catch (error) {
  console.log(error);
     return res.status(500).json({message:"Internal server error"})
    }
}