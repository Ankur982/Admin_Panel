import { ADD_COURSE, ERROR, LOADING } from "./actionType"

const initState = {
    loading: false,
    error: false,
    couses: [],
    addedCourse: {}
}

export const courseReducer = (state = initState, { type, payload }) => {
    switch (type) {

        case ADD_COURSE : {
            return {
                ...state,
                addedCourse: payload
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