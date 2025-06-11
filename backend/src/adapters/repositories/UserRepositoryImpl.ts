import { Model } from "mongoose";
import { IUserSchema } from "../interfaces/IUserSchema";
import { UserRepository } from "../interfaces/UserRepository";

export class UserRepositoryImpl implements UserRepository {
    private readonly UserModel: Model<IUserSchema>
    constructor(userModel: Model<IUserSchema>) {
        this.UserModel = userModel
    }

    async getProfile(userId: string, email: string): Promise<any> {
        try {
            const user = await this.UserModel.findOne({ userId, email })
            return user
        } catch (error) {
            console.log(error);
        }
    }

}
