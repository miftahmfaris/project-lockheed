import axios from "axios";

export const SET_TODOS = "SET_TODOS";

export const setTodo = payload => {
    return {
        type: SET_TODOS,
        payload
    };
};

export const fetchTodos = () => (dispatch, getState) => {
    const { users } = getState();

    if (users.isLogin === true) {
        const token = localStorage.getItem("token");

        return axios({
            method: "GET",
            url: "http://localhost:3002/todos",
            headers: { authorization: `Bearer ${token}` }
        }).then(response => {
            dispatch(setTodo(response.data.data));
        });
    }
};
