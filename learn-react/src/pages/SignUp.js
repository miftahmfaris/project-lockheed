import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { withRouter } from "react-router-dom";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: ""
        };
    }

    handleChange = event => {
        console.log(event.target.name);

        this.setState({ [event.target.name]: event.target.value });
        // this.setState({ name: event.target.value });
        // this.setState({ email: event.target.value });
        // this.setState({ password: event.target.value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { name, email, password } = this.state;
        const user = {
            name: name,
            email: email,
            password: password
        };

        if (name !== "" && email !== "" && password !== "") {
            localStorage.setItem("user", JSON.stringify(user));
            this.props.history.push("/signin");
        } else {
            alert("Your input is still empty");
        }
    };

    render() {
        const { name, email, password } = this.state;

        return (
            <div>
                <h1>Register</h1>
                <div className="signin-form">
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">
                                Name
                            </Label>
                            <Input
                                type="text"
                                name="name"
                                id="exampleName"
                                placeholder="Your Name"
                                onChange={this.handleChange}
                                value={name}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="exampleEmail" className="mr-sm-2">
                                Email
                            </Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="something@idk.cool"
                                onChange={this.handleChange}
                                value={email}
                            />
                        </FormGroup>
                        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                            <Label for="examplePassword" className="mr-sm-2">
                                Password
                            </Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="don't tell!"
                                onChange={this.handleChange}
                                value={password}
                            />
                        </FormGroup>
                        <br />
                        <Button>Submit</Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignUp);
