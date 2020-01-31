import React from "react";
import Counter from "./components/Counter";
import Square from "./components/Square";
import SquareRedux from "./components/SquareRedux";
import Github from "./components/Github";

function App() {
    return (
        <div>
            <Counter />
            <Square />
            <SquareRedux />
            <Github />
        </div>
    );
}

export default App;
