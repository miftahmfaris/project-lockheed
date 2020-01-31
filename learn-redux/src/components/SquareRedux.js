import React from "react";
import { connect } from "react-redux";
import { calculate, updateInput } from "../actions/square";

function SquareRedux(props) {
    const handleSubmit = event => {
        event.preventDefault();
        props.calculate();
    };

    const handleChange = event => {
        props.updateInput(event.target.value);
    };

    return (
        <div>
            <h1>Square Redux</h1>
            <h1>Sisi: {props.sisi}</h1>
            <h1>Luas: {props.luas}</h1>
            <h1>Keliling: {props.keliling}</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    onChange={handleChange}
                    value={props.sisi}
                />
                <button type="submit">Calculate</button>
            </form>
        </div>
    );
}

const mapStateToProps = ({ square }) => {
    return {
        sisi: square.sisi,
        keliling: square.keliling,
        luas: square.luas
    };
};

const mapDispatchToProps = dispatch => {
    return {
        calculate: () => dispatch(calculate()),
        updateInput: input => dispatch(updateInput(input))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SquareRedux);
