import { SET_DATA_MOCK } from "../actions/mock";

const initialState = {
    data: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_MOCK:
            return {
                data: action.payload
            };
        default:
            return state.data || [];
    }
};
