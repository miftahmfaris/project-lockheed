import axios from "axios";

export const login = values => {
    return axios({
        method: "POST",
        url: "http://localhost:3002/users/login",
        data: values
    }).then(response => {
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
        }
    });
};
