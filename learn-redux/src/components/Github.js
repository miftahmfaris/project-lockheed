import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchDataGithub } from "../actions/github";

class Github extends Component {
    componentDidMount = () => {
        this.props.fetchData();
    };
    render() {
        return (
            <div>
                <h1>Github</h1>
                <img
                    src={
                        this.props.github !== undefined &&
                        this.props.github.avatar_url
                    }
                    alt=""
                />
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Github);
