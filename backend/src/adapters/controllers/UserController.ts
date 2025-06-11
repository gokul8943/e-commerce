import { Request, Response } from "express";
import { GetProfile } from "../../usecases/User/GetProfile";


export class UserController {
    constructor(
        private readonly getProfileUseCase: GetProfile
    ) { }

    async getProfile(req: Request, res: Response): Promise<any> {
        try {
            const userId = req.params.id;
            const email = req.body.email;
            const profile = await this.getProfileUseCase.execute(userId, email);
            if (!profile) {
                return res.status(404).json({ message: "Profile not found" });
            } else {
                return res.status(200).json({ message: "Profile found", profile });
            }
        } catch (error) {
            console.error(" User controller Error:", error);
            return res.status(500).json({ message: "Internal server error in controller" });
        }
    }
}