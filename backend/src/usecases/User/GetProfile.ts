import { UserRepository } from "../../adapters/interfaces/UserRepository";


export class GetProfile {
    constructor(private userRepository: UserRepository) { }
    async execute(userId: string, email: string): Promise<any> {
        return this.userRepository.getProfile(userId, email);
    }
}