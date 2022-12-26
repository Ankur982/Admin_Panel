import axios from "axios";
import { ADD_COURSE, ERROR, LOADING } from "./actionType";

export const createCourse = (newCourse,token) => async (dispatch) => {
    dispatch({
        type: LOADING
    });

    try {
        let { data } = await axios.post("http://localhost:8080/course/course", newCourse, {
            headers: {
                'Content-Type': 'application/json',
                'token': token
            }
        });
        alert("Course Added Succesfully...!")
        dispatch({
            type: ADD_COURSE,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: ERROR
        })
    }

}