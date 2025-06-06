import { Request, Response } from "express";
import { SignUp } from "../../usecases/Auth/SignUp";
import bcrypt from "bcryptjs/types";

export class AuthController {
    constructor(
        private readonly signUpUseCase: SignUp
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
}