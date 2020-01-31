import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "./reducers/counter";
import square from "./reducers/square";

export default createStore(combineReducers({ counter, square }));
