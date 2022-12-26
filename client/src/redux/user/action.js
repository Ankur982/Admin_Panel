import { ERROR, LOADING, LOGIN, } from "./actionType";
import axios from "axios";

export const loginUser = (user) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        const res = await axios.post("http://localhost:8080/auth/login", {
            email: user.email,
            password: user.password,
        })
        
        dispatch({
            type: LOGIN,
            payload: res.data
        })

    } catch (error) {
        dispatch({
            type: ERROR
        })
    }
}


