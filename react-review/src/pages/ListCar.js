import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getCar } from "../actions";
import { Card } from "antd";
import { Link } from "react-router-dom";

function ListCar(props) {
    useEffect(() => {
        props.getCar();
    }, []);

    return (
        <div style={{ background: "#ECECEC", padding: "30px" }}>
            {props.cars !== undefined &&
                props.cars.map((item, key) => {
                    return (
                        <Card
                            title={item.name}
                            bordered={false}
                            style={{ width: 300 }}
                            key={key}
                        >
                            <p>{item.year}</p>
                            <Link to={`/list-car/${item.id}`}> Detail</Link>
                        </Card>
                    );
                })}
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
        getCar: () => {
            dispatch(getCar());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCar);
