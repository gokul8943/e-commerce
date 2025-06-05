import { AuthRepository } from "../../adapters/interfaces/AuthRepository";

export class SignUp {
  constructor(private authRepository: AuthRepository) {}

  async execute(userData: any): Promise<any> {
    return this.authRepository.signUp(userData);
  }
}
