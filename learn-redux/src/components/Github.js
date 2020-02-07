import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataGithub } from "../actions/github";

class Github extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: {}
        };
    }

    componentDidMount = () => {
        fetch("https://api.github.com/users/miftahmfaris")
            .then(response => {
                return response.json();
            })
            .then(result => this.setState({ data: result }));
    };
    render() {
        return (
            <div>
                <h1>Github</h1>
                <img src={this.state.data.avatar_url} alt="" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        github: state.github.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            dispatch(fetchDataGithub());
        },
        dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Github);
