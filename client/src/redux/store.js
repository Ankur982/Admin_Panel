import { legacy_createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { Reducer } from "./reducer"



export const store = legacy_createStore(
    Reducer,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

