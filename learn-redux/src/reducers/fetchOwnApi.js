import { SET_FETCH_OWN_API } from "../actions/fetchOwnApi";

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FETCH_OWN_API:
            return action.payload;
        default:
            return state;
    }
};
