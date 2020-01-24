import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./pages/Profile";
import ClassComponent from "./pages/ClassComponent";
import Home from "./pages/Home";
import FunctionComponent from "./pages/FunctionComponent";

import "./styles/index.css";

function App() {
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
            </Switch>
        </Router>
    );
}

export default App;
