import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions/github";

class Github extends Component {
    componentDidMount = () => {
        this.props.fetchData();
    };
    render() {
        return (
            <div>
                <h1>Github</h1>
                <img src={this.props.github.avatar_url} alt="" />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        github: state.github
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => {
            dispatch(fetchData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Github);
