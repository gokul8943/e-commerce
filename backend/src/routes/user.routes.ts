import express from 'express';
import { register,  } from '../Controllers/userController';

const userRouter = express.Router();


userRouter.post('/register', register as any);


export default userRouter;
