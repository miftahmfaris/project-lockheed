import axios from "axios";
export const SET_FETCH_OWN_API = "SET_FETCH_OWN_API";
const OWN_API = process.env.REACT_APP_OWN_API;

export const setDataAPI = data => {
    return {
        type: SET_FETCH_OWN_API,
        payload: data
    };
};

export const fetchOwnApi = () => dispatch => {
    return axios
        .get(`${OWN_API}/todos`)
        .then(response => {
            dispatch(setDataAPI(response.data.data));
        })
        .catch(error => {
            console.log(error);
        });
};
