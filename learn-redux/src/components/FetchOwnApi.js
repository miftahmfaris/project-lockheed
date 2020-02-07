import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOwnApi } from "../actions/fetchOwnApi";

class FetchOwnApi extends Component {
    componentDidMount = () => {
        this.props.fetchOwnApi();
    };
    render() {
        return (
            <div>
                <h1>Fetch Own API</h1>
                <ol>
                    {/* Pengecekan data ownApi undefined atau tidak menggunakan ternary */}
                    {this.props.ownApi !== undefined &&
                        this.props.ownApi.map((item, index) => {
                            return <li key={index}>{item.todo}</li>;
                        })}
                </ol>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ownApi: state.fetchOwnApi
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchOwnApi: () => {
            dispatch(fetchOwnApi());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(FetchOwnApi);
