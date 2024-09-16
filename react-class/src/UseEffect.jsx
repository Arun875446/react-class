import { useState, useEffect } from "react";

const UseEffect = () => {
  const [input, setInput] = useState("");
  const [counter, setCounter] = useState(0);
  console.log("component rendered");

  useEffect(() => {
    console.log("useEffect called");
  },[input, counter]);

  return (
    <div>
      <h2>{input}</h2>
      <h2>{counter}</h2>
      <h1 onClick={() => setCounter((c) => c + 1)}>UseEffect</h1>
      <input onChange={(e) => setInput(e.target.value)} type="text" />
    </div>
  );
};

export default UseEffect;
