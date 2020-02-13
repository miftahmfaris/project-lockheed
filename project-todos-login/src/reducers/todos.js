import { SET_TODOS } from "../actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return action.payload;
        default:
            return state;
    }
};
