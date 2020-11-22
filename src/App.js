import React, { useState, useEffect } from "react";
import Table from "./Table";
import "./App.css";
import Background from "./background.webp";

const checkSolution = (solution, i, j) => {
    const N = solution.length;
    const row = new Array(N + 1).fill(0);
    const column = new Array(N + 1).fill(0);
    for (let k = 0; k < N; ++k) {
        ++row[solution[i][k] ?? 9];
        ++column[solution[k][j] ?? 9];
    }
    for (let k = 0; k < N; ++k) {
        if (row[k] && row[k] > 1) return false;
        if (column[k] && column[k] > 1) return false;
    }
    return true;
};

const calculateOutput = (input) => {
    const N = input.length;
    let i = 0;
    const solution = [...input];
    while (i < N && i >= 0) {
        let j = 0;
        while (j < N && j >= 0) {
            console.log("halo", i, j);
            let guess = solution[i][j] ?? 0;
            //adott input, ne basztassuk
            if (input[i][j]) {
              ++j;
            } else {
                ++guess;
                while (guess <= 7) {
                    solution[i][j] = guess;
                    if (checkSolution(solution, i, j)) break;
                    ++guess;
                }
                if (guess <= 7) {
                    ++j;
                } else {
                    solution[i][j] = null;
                    if (j > 0) {
                        --j;
                    } else {
                        --i;
                    }
                    //backtrack
                }
            }
        }
        ++i;
    }
    return solution;
};

function App() {
    const [input, setInput] = useState([
        [null, null, null, null, null, null, null],
        [null, null, 1, 2, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
        [null, null, null, null, null, null, null],
    ]);
    useEffect(() => {
        setInput(() => calculateOutput(input));
    }, []);

    return (
        <div
            className="App"
            style={{ background: `url(${Background})`, position: "absolute", width: "100%", height: "100%", backgroundSize: "cover" }}
        >
            <Table data={input}></Table>
        </div>
    );
}

export default App;
