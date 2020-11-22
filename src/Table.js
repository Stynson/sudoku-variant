import React from "react";

export default function ({ data }) {
    return (
        <div
            style={{
                display: "grid",
                grid: "repeat(7, 50px) / repeat(7, 50px)",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%,-50%)",
                alignItems: "center",
                background: "white",
                border: "1px solid black",
                gap: "10px",
                padding: "10px",
                fontSize: "34px",
            }}
        >
            {data.map((row) => row.map((record) => <div style={{ border: "1px solid black", width: "100%", height: "100%" }}>{record}</div>))}
        </div>
    );
}
