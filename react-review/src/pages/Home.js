import React from "react";
import { connect } from "react-redux";
import { Formik } from "formik";
import { Form, Input, Button } from "antd";
import { postCar } from "../actions";

function Home(props) {
    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 }
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 }
        }
    };
    
    return (
        <div>
            <h1>Home</h1>
            <Formik
                initialValues={{ name: "", year: 2000, color: "", brand: "" }}
                onSubmit={values => {
                    props.postCar(values);
                }}
            >
                {props => {
                    return (
                        <Form {...formItemLayout} onSubmit={props.handleSubmit}>
                            <Form.Item label="Name">
                                <Input
                                    name="name"
                                    onChange={props.handleChange}
                                    value={props.values.name}
                                />
                            </Form.Item>
                            <Form.Item label="Year" hasFeedback>
                                <Input
                                    name="year"
                                    onChange={props.handleChange}
                                    value={props.values.year}
                                />
                            </Form.Item>
                            <Form.Item label="Color">
                                <Input
                                    name="color"
                                    onChange={props.handleChange}
                                    value={props.values.color}
                                />
                            </Form.Item>
                            <Form.Item label="Brand">
                                <Input
                                    style={{ width: "100%" }}
                                    name="brand"
                                    onChange={props.handleChange}
                                    value={props.values.brand}
                                />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        postCar: values => {
            dispatch(postCar(values));
        }
    };
};

export default connect(null, mapDispatchToProps)(Home);
