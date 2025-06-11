import { Router } from "express";
import { UserRepositoryImpl } from "../repositories/UserRepositoryImpl";
import { GetProfile } from "../../usecases/User/GetProfile";
import { UserController } from "../controllers/UserController";
import userModel from "../../frameworks/models/user/user.model";

const userRepository = new UserRepositoryImpl(userModel);
const getProfileUseCase = new GetProfile(userRepository);
const userController = new UserController(getProfileUseCase);

const router = Router();

router.post('/get-profile', async (req, res) => {
    try {
        userController.getProfile(req, res)
    } catch (error) {
        res.status(500).json({ message: "Error in routes", error })
    }
})