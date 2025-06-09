import { Request, Response } from "express";
import { SignUp } from "../../usecases/Auth/SignUp";
import bcrypt from "bcryptjs";
import { SignIn } from "../../usecases/Auth/SignIn";
import jwt from 'jsonwebtoken'
import { generateOtp } from "../../utils/generateOtp";
import { sendOtpEmail } from "../../utils/sendOtptoMail";
import { GenerateOtp } from "../../usecases/Auth/sendOtp";
import { VerifyOtp } from "../../usecases/Auth/verifyOtp";

const jwtSecret: any = process.env.JWT_SECRET;
export class AuthController {
    constructor(
        private readonly signUpUseCase: SignUp,
        private readonly loginUseCase: SignIn,
        private readonly generateOtpUseCase: GenerateOtp,
        private readonly verifyOtpUseCase: VerifyOtp
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
            console.error("Sign Up controller Error:", error);
            return res.status(500).json({ message: "Internal server error in controller" });
        }
    }

    async sendOtp(req: Request, res: Response): Promise<any> {
        try {
            const { email } = req.body
            if (!email) return res.status(400).json({ message: "Email is  required" })
            const otp = generateOtp()
            const sendMail = await sendOtpEmail(email, otp)
            const generate = await this.generateOtpUseCase.execute(email, otp);
            return res.status(200).json({ message: "OTP sent successfully", sendMail, generate });
        } catch (error) {
            console.error("Send OTP controller Error:", error);
            return res.status(500).json({ message: "Internal server error in controller" });
        }
    }

    async verifyOtp(req: Request, res: Response): Promise<any> {
        try {
            const { email, otp } = req.body
            if (!email || !otp) return res.status(400).json({ message: "OTP is required" })
            const verifyOtp = await this.verifyOtpUseCase.execute(email, otp);
            return res.status(200).json({ message: "OTP verified successfully", verifyOtp });
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
            console.error("Sign In Controller Error:", error);
            return res.status(500).json({ message: "Internal server error in controller" });
        }
    }
}