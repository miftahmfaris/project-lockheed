import React, { Component } from "react";
import { Link } from "react-router-dom";

const GITHUB_URL = process.env.REACT_APP_API_URL;

export default class Fetch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
    }

    componentDidMount = () => {
        fetch("https://api.github.com/users")
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({ data: result });
            });
    };

    render() {
        return (
            <div>
                {this.state.data.map((item, index) => {
                    return (
                        <React.Fragment key={index}>
                            <h1>{item.login}</h1>
                            <Link to={`/detailPage/${item.login}`}>Detail</Link>
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }
}
