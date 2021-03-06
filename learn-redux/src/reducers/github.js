import { SET_DATA } from "../actions/github";

const initialState = {
    data: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                data: action.payload
            };
        default:
            return { ...state };
    }
};
