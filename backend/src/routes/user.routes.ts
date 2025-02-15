import express from 'express';
import { login, register,  } from '../Controllers/userController';

const userRouter = express.Router();


userRouter.post('/register', register as any);
userRouter.post('/login', login as any);


export default userRouter;
