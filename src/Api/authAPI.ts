import axios, {AxiosResponse} from "axios";
import {ResponseType} from "./todolists-api";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': '925a078a-aac7-41df-b619-d47eca8c427b'
    }
})



export const authAPI = {
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{userId: number}>>>('auth/login', data)
    },
    autMe(){
        return instance.get<ResponseType<AuthMeType>>('auth/me')
    },
    logout(){
        return instance.delete<ResponseType>('auth/login')
    }

}
//type
export type LoginParamsType = {
    email : string
    password: string
    rememberMe?: boolean
    captcha?: string
}

type AuthMeType = {
    id: number
    email: string
    password: string
}