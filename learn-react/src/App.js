import React from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";
import { About } from "./components/About";
import ClassComponent from "./components/ClassComponent";

import "./styles/index.css";

function App() {
    return (
        <div>
            <Header />
            <main>
                <Profile />
                <About />
            </main>
            <ClassComponent />
        </div>
    );
}

export default App;
