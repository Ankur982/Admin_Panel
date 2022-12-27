import { ADD_COURSE, DELETE_COURSE, ERROR, GET_COURSE, LOADING, UPDATE_COURSE } from "./actionType"

const initState = {
    loading: false,
    error: false,
    courses: [],
    addedCourse: {}
}

export const courseReducer = (state = initState, { type, payload }) => {
    switch (type) {

        case ADD_COURSE : {
            return {
                ...state,
                loading: false,
                error: false,
                addedCourse: payload
            }
        }


        case GET_COURSE : {
            return {
                ...state,
                loading: false,
                error: false,
                courses: payload
            }
        }

        case DELETE_COURSE: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }


        case UPDATE_COURSE: {
            return {
                ...state,
                loading: false,
                error: false,
            }
        }


        case LOADING: {
            return {
                ...state,
                loading: true,
                error: false
            }
        }

        case ERROR: {
            return {
                ...state,
                loading: false,
                error: true
            }
        }

        default: return state
    }
}