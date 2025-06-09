import { Router } from "express";
import { AuthRepositoryImpl } from "../repositories/AuthRepositoryImpl";
import { AuthController } from "../controllers/AuthController";
import { SignUp } from "../../usecases/Auth/SignUp";
import userModel from "../../frameworks/models/user/user.model";
import { SignIn } from "../../usecases/Auth/SignIn";


const authRepository = new AuthRepositoryImpl(userModel);
const signUp = new SignUp(authRepository); 
const signIn = new SignIn(authRepository);
const authController = new AuthController(signUp,signIn);


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

export default router