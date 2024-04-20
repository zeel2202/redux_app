import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "../reducders/rootReducer";
import { thunk } from "redux-thunk";

export const store = createStore(rootReducer,applyMiddleware(thunk))