import { useState } from "react";

export const CounterApp = ({ value }) => {
  const [count, setCount] = useState(value);

  function sumCount() {
    return setCount(count + 1);
  }
  function resCount() {
    return setCount(count - 1);
  }
  function resetCount() {
    return setCount(value);
  }

  return (
    <div>
      <h1>CounterApp</h1>
      <h2> {count} </h2>
      <button onClick={sumCount}>+1</button>
      <button onClick={resCount}>-1</button>
      <button aria-label="button-reset" onClick={resetCount}>
        Reset
      </button>
    </div>
  );
};
