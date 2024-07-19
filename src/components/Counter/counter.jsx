import React from "react";
import { useState } from "react";
import "../Counter/counter.css";

function counter() {
  const [counterState, setCounterState] = useState(0);

  function Click() {
    setCounterState(counterState + 1);
  }

  function lClick() {
    setCounterState(counterState - 1);
  }

  return (
    <div className="container counter">
      <span>
        <button onClick={Click}>count+</button>
        <button onClick={lClick}>count-</button>
      </span>
      <h2>{counterState}</h2>
    </div>
  );
}

export default counter;
