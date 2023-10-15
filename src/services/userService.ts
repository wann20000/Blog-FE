import axiosInstance from "../utils/axios";
import { createUserType } from "../utils/types";

export const getUserService = async () => {
    try {
        const response = await axiosInstance.get('/users')
        if (response.status !== 200) {
            return { message: "Error" }
        }
        return response.data
    } catch (error) {

    }
}

export const createUserService = async (body: createUserType) => {
    try {
        const response = await axiosInstance.post('/users', body)
        return response
    } catch (error) {

    }
}
