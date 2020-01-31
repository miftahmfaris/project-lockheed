import axios from "axios";

export const SET_DATA_MOCK = "SET_DATA_MOCK";

const MOCK_API = process.env.REACT_APP_MOCK;

export const setDataMock = data => {
    return {
        type: SET_DATA_MOCK,
        payload: data
    };
};

export const fetchDataMock = () => dispatch => {
    return axios.get(MOCK_API).then(result => {
        dispatch(setDataMock(result.data));
    });
};

export const addDataMock = value => dispatch => {
    return axios.post(MOCK_API, { value }).then(result => {
        dispatch(fetchDataMock());
    });
};
