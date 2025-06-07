export interface AuthRepository {
    signUp(data: any): Promise<any>;
    signIn(email: string): Promise<any>;
}