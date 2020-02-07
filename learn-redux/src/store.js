import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import counter from "./reducers/counter";
import square from "./reducers/square";
import github from "./reducers/github";
import mock from "./reducers/mock";
import fetchOwnApi from "./reducers/fetchOwnApi";

export default createStore(
    combineReducers({ counter, square, github, mock, fetchOwnApi }),
    applyMiddleware(thunk, logger)
);
