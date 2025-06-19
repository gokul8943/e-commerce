
import axios from '../../constants/instance'

export const register = (data:any) =>{
    console.log('data',data);
    
    return axios.post("/user/auth/sign-up",data)
}