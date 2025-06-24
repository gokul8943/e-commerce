import { Router } from "express";
import { AuthRepositoryImpl } from "../repositories/AuthRepositoryImpl";
import { AuthController } from "../controllers/AuthController";
import { SignUp } from "../../usecases/Auth/SignUp";
import userModel from "../../frameworks/models/user/user.model";
import { SignIn } from "../../usecases/Auth/SignIn";
import { GenerateOtp } from "../../usecases/Auth/sendOtp";
import { VerifyOtp } from "../../usecases/Auth/verifyOtp";
import otpModel from "../../frameworks/models/otp/otp.model";
import { OtpRepositoryImpl } from "../repositories/OtpRepositoryImpl";


const authRepository = new AuthRepositoryImpl(userModel);
const otpRepository = new OtpRepositoryImpl(otpModel);
const signUp = new SignUp(authRepository); 
const signIn = new SignIn(authRepository);
const generateOtp = new GenerateOtp(otpRepository);
const verifyOtp = new VerifyOtp(otpRepository);  
const authController = new AuthController(signUp,signIn,generateOtp,verifyOtp);


const router = Router();

router.post('/sign-up', async (req, res) => {
    try {
        authController.signUp(req, res)
    } catch (error) {
        res.status(500).json({ message: "Error in routes", error })
    }
})
router.post('/sign-in', async(req, res) =>{
    try {
        authController.signIn(req, res)
    } catch (error) {
        res.status(500).json({ message: "Error in routes", error  })
    }
});


router.post('/send-otp', async (req, res) => {
    try {
        authController.sendOtp(req, res)
    } catch (error) {
        res.status(500).json({ message: "Error in routes", error })
    }
})

router.get('/verify-otp', async (req, res) => {
    try {
        authController.verifyOtp(req, res)
    } catch (error) {
        res.status(500).json({ message: "Error in routes", error })
    }
})
export default router