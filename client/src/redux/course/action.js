import axios from "axios";
import { ADD_COURSE, DELETE_COURSE, ERROR, GET_COURSE, LOADING, UPDATE_COURSE } from "./actionType";

export const createCourse = (newCourse, token) => async (dispatch) => {
  dispatch({
    type: LOADING
  });

  try {
    let { data } = await axios.post("https://admin-panel-backend-ys08.onrender.com/course/course", newCourse, {
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


export const getCourse = (token) => async (dispatch) => {
  dispatch({
    type: LOADING
  });
  try {
    const res = await axios.get("https://admin-panel-backend-ys08.onrender.com/course/course", {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    });
    dispatch({
      type: GET_COURSE,
      payload: res.data
    });
  } catch (e) {
    dispatch({
      type: ERROR
    });
  }

}


export const deleteCourse = (token, id) => async (dispatch) => {
  dispatch({
    type: LOADING
  });
  try {
    const res = await axios.delete(`https://admin-panel-backend-ys08.onrender.com/course/${id}`, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }

    });
    dispatch({
      type: DELETE_COURSE
    });
  } catch (e) {
    dispatch({
      type: ERROR
    });
  }

}


export const updateCourse = (token, id, newData) => async (dispatch) => {
  dispatch({
    type: LOADING
  });
  try {
    const res = await axios.patch(`https://admin-panel-backend-ys08.onrender.com/course/${id}`, newData, {
      headers: {
        'Content-Type': 'application/json',
        'token': token
      }
    });
    dispatch({
      type: UPDATE_COURSE
    });
  } catch (e) {
    dispatch({
      type: ERROR
    });
  }

}