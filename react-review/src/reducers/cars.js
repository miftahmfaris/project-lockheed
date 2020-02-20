import { SET_CAR, SET_CAR_BY_ID } from "../actions";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CAR:
            return action.payload;
        case SET_CAR_BY_ID:
            return action.payload;
        default:
            return state;
    }
};
