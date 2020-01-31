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

export const addDataMock = ({ name, city, country }) => dispatch => {
    return axios.post(MOCK_API, { name, city, country }).then(result => {
        dispatch(fetchDataMock());
    });
};

export const deleteData = index => dispatch => {
    return axios.delete(`${MOCK_API}/${index}`).then(result => {
        dispatch(fetchDataMock());
    });
};
