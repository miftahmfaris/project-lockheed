import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import counter from "./reducers/counter";
import square from "./reducers/square";
import github from "./reducers/github";

export default createStore(
    combineReducers({ counter, square, github }),
    applyMiddleware(thunk)
);
