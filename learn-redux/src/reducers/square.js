import { CALCULATE, UPDATE_INPUT } from "../actions/square";

const initialState = {
    sisi: 0,
    keliling: 0,
    luas: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_INPUT:
            return {
                sisi: action.payload
            };
        case CALCULATE:
            return {
                keliling: state.sisi * 4,
                luas: state.sisi * state.sisi,
                sisi: 0
            };
        default:
            return {
                sisi: state.sisi,
                keliling: state.keliling,
                luas: state.luas
            };
    }
};
