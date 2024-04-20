import { combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { arrayObjReducer } from "./arayObjreducer";
import { apiReducer } from "./apiReducer";

export const rootReducer = combineReducers({
    counter:counterReducer,
    arayObj:arrayObjReducer,
    users:apiReducer
})