import axios from "axios";
import setAuthToken from "./axios";

export const SET_FETCH_OWN_API = "SET_FETCH_OWN_API";
const OWN_API = process.env.REACT_APP_OWN_API;
const token = localStorage.getItem("token");


export const setDataAPI = data => {
    return {
        type: SET_FETCH_OWN_API,
        payload: data
    };
};

export const fetchOwnApi = () => dispatch => {
    setAuthToken(token);
    return axios
        .get(`${OWN_API}/todos`)
        .then(response => {
            dispatch(setDataAPI(response.data.data));
        })
        .catch(error => {
            console.log(error);
        });
};
