import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class DetailPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount = () => {
        const { username } = this.props.match.params;

        fetch(`https://api.github.com/users/${username}`)
            .then(response => {
                return response.json();
            })
            .then(result => {
                this.setState({ data: result });
            });
    };
    render() {
        console.log(this.props);
        
        return (
            <div>
                <h1>
                    My name is{" "}
                    {this.state.data !== undefined && this.state.data.login}
                </h1>
                <img src={this.state.data.avatar_url} alt="" />
            </div>
        );
    }
}

export default withRouter(DetailPage);
