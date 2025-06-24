
import axios from '../../constants/instance'

export const register = (data:any) =>{
    console.log('data',data);
    
    return axios.post("/user/auth/sign-up",data)
}

export const sendOtp = (data:any) =>{
    return axios.post("/user/auth/send-otp",data)
}

export const verifyOtp = (data:any) =>{
    return axios.post("/user/auth/verify-otp",data)
}