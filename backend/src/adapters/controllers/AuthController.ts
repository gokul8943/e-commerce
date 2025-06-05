import { SignUp } from "../../usecases/Auth/SignUp";

export class AuthController {
    constructor(
        private readonly signUpUseCase: SignUp
    ) {}
}