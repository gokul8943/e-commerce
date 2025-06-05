import { Model } from "mongoose";
import UserModel from "../../frameworks/models/user/user.model";
import { AuthRepository } from '../interfaces/AuthRepository'

export class AuthRepositoryImpl implements AuthRepository {
    private readonly UserModel: Model<IUserSchema>

    constructor(userModel:Model<IUserSchema>) {
        this.UserModel = UserModel
    }
    async signUp(data: any) {
       
    }
}