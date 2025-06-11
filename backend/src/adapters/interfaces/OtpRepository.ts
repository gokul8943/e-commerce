
export interface OtpRepository {
    generateOtp(email: string, otp: string): Promise<any>;
    verifyOtp(email: string, otp: number): Promise<any>;
    deleteOtp(email: string): Promise<void>;
}