import axios from "axios";
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess } from "./authSlice";

const ax = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await ax.post('auth/login', user);
        
        dispatch(loginSuccess(res.data.data))
        navigate('/class');
    } catch (error) {
        dispatch(loginFailed())
    }
}

export const registerNewUser = async(user,dispatch, navigate) => {
    dispatch(registerStart())
    try {
        await ax.post('auth/register',user);
        dispatch(registerSuccess())
        navigate('/login/student')
    } catch (error) {
        dispatch(registerFailed())
    }
}
