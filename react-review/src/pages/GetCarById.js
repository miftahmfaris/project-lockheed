import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCarById } from "../actions";
import { withRouter } from "react-router-dom";

function GetCarById(props) {
    const {
        match: {
            params: { id }
        }
    } = props;

    useEffect(() => {
        props.getCarById(id);
    }, []);

    return (
        <div>
            <h1>
                {props.cars.name} - Brand {props.cars.brand}
            </h1>
            <p>
                Mobil ini berwarna {props.cars.color} dan dibuat pada tahun{" "}
                {props.cars.year}
            </p>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cars: state.cars
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getCarById: id => {
            dispatch(getCarById(id));
        }
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(GetCarById)
);
