import axios from "axios";

const token = localStorage.getItem("token");
export const SET_TODOS = "SET_TODOS";

export const setTodo = payload => {
    return {
        type: SET_TODOS,
        payload
    };
};

export const fetchTodos = () => dispatch => {
    return axios({
        method: "GET",
        url: "http://localhost:3002/todos",
        headers: { authorization: `Bearer ${token}` }
    }).then(response => {
        dispatch(setTodo(response.data.data));
    });
};
