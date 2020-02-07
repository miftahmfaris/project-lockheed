import axios from "axios";
export const SET_DATA = "SET_DATA";

const API_GITHUB = process.env.REACT_APP_API_GITHUB;

export const setData = data => {
    return {
        type: SET_DATA,
        payload: data
    };
};

export const fetchDataGithub = () => dispatch => {
    console.log("masuk");

    // const dataGithub = await axios.get(API_GITHUB);

    // const result = dispatch(setData(dataGithub.data));

    // console.log(result);

    // return result;
};
