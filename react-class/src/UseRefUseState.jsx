import { useEffect, useRef, useState } from "react";
const UseRefUseState = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
    console.log("useEffect ran", prevCountRef.current);
  }, [count]);

  const prevCount = prevCountRef.current;
  console.log("Current Count", count);
  console.log("Previous Count", prevCount);
  return (
    <div>
      <p>Count: {count}</p>
      <p>prevCount: {prevCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseRefUseState;
