import axios from "axios";

const setAuthToken = token => {
    axios.defaults.baseURL = "http://localhost:3002";
    axios.defaults.headers.common["X-API-KEY"] = "INISECRET";

    if (token) {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
};

export default setAuthToken;
