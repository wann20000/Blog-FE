import axiosInstance from "../utils/axios";
import { createUserType } from "../utils/types";

export const getUserService = async () => {
    try {
        const response = await axiosInstance.get('/users')
        console.log(response)
        return response
    } catch (error) {
        
    }
}

export const createUserService = async (body:createUserType) => {
    try {
        const response = await axiosInstance.post('/users', body)
        console.log(response)
        return response
    } catch (error) {
        
    }
}
