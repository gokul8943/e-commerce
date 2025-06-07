import { AuthRepository } from "../../adapters/interfaces/AuthRepository";

export class SignIn {
  constructor(private authRepository: AuthRepository) {}

  async execute(email: any): Promise<any> {
    return this.authRepository.signIn(email);
  }
}
