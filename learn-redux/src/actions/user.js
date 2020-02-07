import Axios from "axios";

const OWN_API = process.env.REACT_APP_OWN_API;

export const postData = values => dispatch => {
    return Axios.post(`${OWN_API}/users`, values)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        });
};
