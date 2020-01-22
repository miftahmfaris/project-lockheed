import React, { Fragment } from "react";
import PropTypes from "prop-types";

const FunctionComponent = props => {
    return (
        <Fragment>
            <h1>Fucntion Component</h1>

            <p>
                I am {props.age} years old, my name is {props.name}
            </p>
            <button onClick={props.addAge}>Add Age</button>
        </Fragment>
    );
};

FunctionComponent.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};

FunctionComponent.defaultProps = {
    name: "Saya"
};

export default FunctionComponent;
