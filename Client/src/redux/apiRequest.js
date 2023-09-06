import axios from "axios";
import { loginFailed, loginStart, loginSuccess } from "./authSlice";

const ax = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

export const loginUser = async(user, dispatch, navigate) => {
    dispatch(loginStart())
    try {
        const res = await ax.post('auth/login', user);
        dispatch(loginSuccess(res.data))
        navigate('/class');
    } catch (error) {
        dispatch(loginFailed())
    }
}

