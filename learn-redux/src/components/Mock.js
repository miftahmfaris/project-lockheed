import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataMock, addDataMock } from "../actions/mock";
import { Formik } from "formik";

class Mock extends Component {
    componentDidMount = () => {
        this.props.fetchDataMock();
    };

    render() {
        return (
            <div>
                <h1>Mock</h1>
                <Formik
                    initialValues={{ name: "", city: "", country: "" }}
                    onSubmit={(values, actions) => {
                        this.props.dispatch(addDataMock(values));
                    }}
                >
                    {({
                        handleBlur,
                        handleChange,
                        values,
                        errors,
                        handleSubmit
                    }) => (
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                name="name"
                            />
                            <input
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.city}
                                name="city"
                            />
                            <input
                                type="text"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.country}
                                name="country"
                            />
                            {errors.name && (
                                <div id="feedback">{errors.name}</div>
                            )}
                            <button type="submit">Submit</button>
                        </form>
                    )}
                </Formik>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        mock: state.mock
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchDataMock: () => dispatch(fetchDataMock()),
        addDataMock: values => dispatch(addDataMock(values)),
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Mock);
