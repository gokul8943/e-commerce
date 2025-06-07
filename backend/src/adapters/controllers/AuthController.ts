import { Request, Response } from "express";
import { SignUp } from "../../usecases/Auth/SignUp";
import bcrypt from "bcryptjs/types";
import { SignIn } from "../../usecases/Auth/SignIn";
import jwt from 'jsonwebtoken'

const jwtSecret: any = process.env.JWT_SECRET;
export class AuthController {
    constructor(
        private readonly signUpUseCase: SignUp,
        private readonly loginUseCase: SignIn
    ) { }

    async signUp(req: Request, res: Response): Promise<any> {
        try {
            const { name, email, password } = req.body
            if (!name || !email || !password) return res.status(400).json({ message: "All fields are required" })
            const existingUser = await this.loginUseCase.execute(email);
            if (existingUser) {
                return res.status(409).json({ message: "User already exists" });
            }
            const encryptedPassword = await bcrypt.hash(password, 10);
            const user = await this.signUpUseCase.execute({
                ...req.body,
                password: encryptedPassword,
            });
            return res.status(201).json({ message: "User registered. Verify OTP sent to email.", user });
        } catch (error) {

        }
    }
    async signIn(req: Request, res: Response): Promise<any> {
        try {
            const { email, password } = req.body
            if (!email || !password) return res.status(400).json({ message: "All fields are required" })
            const user = await this.loginUseCase.execute(email);
            if (!user) {
                return res.status(404).json({ message: `No user with email ${email}` });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ message: "Invalid credentials" });
            }

            const accessToken = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '30m' });
            const refreshToken = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: '30d' });

            const { password: _, ...userWithoutPassword } = user.toObject?.() || user;

            return res.status(200).json({
                message: "Login successful",
                accessToken,
                refreshToken,
                user: userWithoutPassword
            });
        } catch (error) {
            console.log(error);
        }
    }
}