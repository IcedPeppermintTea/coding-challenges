import Counter from "./components/Counter";
import { useState } from "react";

function App() {
  // variables
  const [number, setNumber] = useState(0);

  // functions
  function add() {
    setNumber((prev) => prev + 1);
  }
  function subtract() {
    setNumber((prev) => {
      if (prev === 0) {
        return (prev = 0);
      } else {
        return prev - 1;
      }
    });
  }
  function reset() {
    setNumber(0);
  }

  return (
    <Counter
      number={number}
      add={add}
      subtract={subtract}
      reset={reset}
    ></Counter>
  );
}

export default App;
