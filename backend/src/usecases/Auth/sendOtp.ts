import { OtpRepository } from "../../adapters/interfaces/OtpRepository";
import { sendOtpEmail } from "../../utils/sendOtptoMail";

export class GenerateOtp {
    constructor(private otpRepository:OtpRepository) {}

    async execute(email: string,otp:string): Promise<any> {
        await sendOtpEmail(email, otp);
        return this.otpRepository.generateOtp(email,otp);
    }
}