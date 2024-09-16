import { useState } from "react";

const UpdaterFunction = () => {
  const [count, setCount] = useState();

  const increment = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)
    // react will batch the above 3 states.

    // updater function
    setCount(c => c + 1);
  };
  const decrement = () => {
    setCount(c => c - 1);
  };

  const reset = () => {
    setCount(0);
  };
  return (
    <div>
      <h1>Updater function</h1>

      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default UpdaterFunction;
