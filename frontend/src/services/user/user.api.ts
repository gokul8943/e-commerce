
import axios from '../../constants/instance'

export const register = (data:any) =>{
    return axios.post("/user/register",data)
}