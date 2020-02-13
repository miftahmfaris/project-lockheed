import Axios from "axios";
import setAuthToken from "./axios";

const OWN_API = process.env.REACT_APP_OWN_API;
const token = localStorage.getItem("token");
export const SET_DATA_USER = "SET_DATA_USER";

export const setDataUser = payload => {
    return {
        type: SET_DATA_USER,
        payload
    };
};

export const postData = values => dispatch => {
    return Axios.post(`${OWN_API}/users`, values)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};

export const fetchUser = () => dispatch => {
    setAuthToken(token);

    return Axios.get(`${OWN_API}/users`)
        .then(response => {
            console.log(response);

            dispatch(setDataUser(response.data));
        })
        .catch(error => {
            console.log(error);
        });
};
