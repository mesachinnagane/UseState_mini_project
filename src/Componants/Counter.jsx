import React from "react";
import { useState } from "react";

const Counter = () => {
  let [backcss, setBackcss] = useState("red");
  let [textcss, setTextcss] = useState("blue");
  let [size, setSize] = useState(40);
  return (
    <>
      <div className="top">
        <div className="main" style={{ backgroundColor: backcss }}>
          <h1 className="hmain" style={{ color: textcss, fontSize: size }}>
            Hello from Counter{" "}
          </h1>
          <br></br>
          <br></br>
          <button
            className="btn btn-warning"
            onClick={() => {
              setBackcss("blue");
              setTextcss("black");
            }}
          >
            Change Theme blue
          </button>
          <br></br>
          <br></br>
          <button
            className="btn btn-warning"
            onClick={() => {
              setBackcss("black");
              setTextcss("white");
            }}
          >
            Change Theme black
          </button>

          <br></br>
          <br></br>
          <button
            className="btn btn-warning"
            onClick={() => {
              setSize(size + 1);
            }}
          >
            Increase font size
          </button>

          <br></br>
          <br></br>
          <button
            className="btn btn-warning"
            onClick={() => {
              setSize(size - 1);
            }}
          >
            Decrese font size
          </button>
        </div>
      </div>
    </>
  );
};

export default Counter;
