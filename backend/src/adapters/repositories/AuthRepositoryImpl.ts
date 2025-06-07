import { Model } from "mongoose";
import UserModel from "../../frameworks/models/user/user.model";
import { AuthRepository } from '../interfaces/AuthRepository'
import { IUserSchema } from "../interfaces/IUserSchema";

export class AuthRepositoryImpl implements AuthRepository {
    private readonly UserModel: Model<IUserSchema>

    constructor(userModel: Model<IUserSchema>) {
        this.UserModel = UserModel
    }
    async signUp(data: IUserSchema): Promise<any> {
        try {
            const user = await this.UserModel.create(data)
            return user
        } catch (error) {
            console.log(error);
        }
    }

    async signIn(email: string): Promise<any> {
        try {
            const user = await this.UserModel.findOne({ email })
            return user
        } catch (error) {
            console.log(error);
        }
    }
}