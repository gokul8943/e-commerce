import { Router } from "express";
import { AuthRepositoryImpl } from "../repositories/AuthRepositoryImpl";
import { AuthController } from "../controllers/AuthController";
import { SignUp } from "../../usecases/Auth/SignUp";
import userModel from "../../frameworks/models/user/user.model";


const authRepository = new AuthRepositoryImpl(userModel);
const signUp = new SignUp(authRepository);  
const authController = new AuthController(signUp);


const router = Router();

router.post('/sign-up', async (req, res) => {})