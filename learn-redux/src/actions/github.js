import axios from "axios";
export const SET_DATA = "SET_DATA";

const API_GITHUB = process.env.REACT_APP_API_GITHUB;

export const setData = data => {
    return {
        type: SET_DATA,
        payload: data
    };
};

export const fetchDataGithub = () => async dispatch => {
    return axios
        .get(API_GITHUB)
        .then(response => {
            dispatch(setData(response.data));
        })
        .catch(error => {
            console.log(error);
        });
};
