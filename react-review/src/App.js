import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import ListCar from "./pages/ListCar";
import GetCarById from "./pages/GetCarById";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/list-car">
                    <ListCar />
                </Route>
                <Route exact path="/list-car/:id">
                    <GetCarById />
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
