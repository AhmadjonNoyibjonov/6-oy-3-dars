import "./App.css";
import { useState } from "react";

function App() {
  const [counterState, setCounterState] = useState(0);

  function Click() {
    setCounterState(counterState + 1);
  }

  function lClick() {
    setCounterState(counterState - 1);
  }

  return (
    <>
      <button onClick={Click}>count+</button>
      <button onClick={lClick}>count-</button>
      <h1>{counterState}</h1>
    </>
  );
}

export default App;
