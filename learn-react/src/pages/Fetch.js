import React, { Component } from "react";

const GITHUB_URL = process.env.REACT_APP_API_URL;

export default class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount = () => {
        fetch(GITHUB_URL)
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({ data: result });
            });
    };

    render() {
        const { data } = this.state;
        return (
            <div>
                <h1>{data.login}</h1>
            </div>
        );
    }
}
