import { useState } from "react";
const UseStateWork = () => {
  const [count, setCount] = useState(0);
  console.log("component Rendered");
  console.log("countGlobal:", count);

  const increment = () => {
    setCount((c) => c + 1);
    console.log("countEffect:", count);
  };

  return (
    <div>
      <h1>how useState works</h1>
      <h3>count: {count}</h3>
      <button onClick={increment}>increment</button>
    </div>
  );
};

export default UseStateWork;
