import {post} from "../../requests"

export const signIn = async (email, password) => {
    return await post({email, password}, 'auth/signin')
}


export const signUp = async (userData) => {
    return await post(userData, 'auth/signup')
}


export const resetPassword = async (email) => {
    return await post({email}, 'auth/reset-password')
}