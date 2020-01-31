export const CALCULATE = "CALCULATE";
export const UPDATE_INPUT = "UPDATE_INPUT";

export const calculate = () => {
    return {
        type: CALCULATE
    };
};

export const updateInput = input => {
    return {
        type: UPDATE_INPUT,
        payload: input
    };
};
