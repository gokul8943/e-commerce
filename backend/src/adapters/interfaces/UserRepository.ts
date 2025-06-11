export interface UserRepository {
    getProfile(userId: string, email: string): Promise<any>;
}