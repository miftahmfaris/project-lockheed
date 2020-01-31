import React, { useState } from "react";

export default function Square() {
    const [square, setSquare] = useState(0);
    const [result, setResult] = useState({
        keliling: 0,
        luas: 0
    });
    const handleSubmit = event => {
        event.preventDefault();
        const resultKeliling = 4 * square;
        const resultLuas = Math.pow(square, 2);
        setResult({ keliling: resultKeliling, luas: resultLuas });
    };
    const handleChange = event => {
        setSquare(event.target.value);
    };
    return (
        <div>
            <h1>Square Formula</h1>
            <h2>Keliling: 4 x {square}</h2>
            <h2>
                Luas: {square} x {square}
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    value={square}
                    onChange={handleChange}
                    name="square"
                />
                <button type="submit">Result</button>
            </form>
            <h1>Keliling Persegi: {result.keliling}</h1>
            <h1>Luas Persegi: {result.luas}</h1>
        </div>
    );
}
