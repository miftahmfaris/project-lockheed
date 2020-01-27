import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import ClassComponent from "./pages/ClassComponent";
import Home from "./pages/Home";
import FunctionComponent from "./pages/FunctionComponent";
import TodoList from "./pages/TodoList";
import SignIn from "./pages/SignIn";

import "./styles/index.css";

function App() {
    const isLogin = JSON.parse(localStorage.getItem("status"));

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/class">
                    <ClassComponent />
                </Route>
                <Route path="/function">
                    <FunctionComponent />
                </Route>
                <Route path="/todolist">
                    {isLogin && isLogin !== null ? (
                        <TodoList />
                    ) : (
                        <Redirect to="/signin" />
                    )}
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
