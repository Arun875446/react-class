import { useEffect, useRef } from "react";

const UseRefWork = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    console.log("component rendered");
  });

  const handleClick = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "red";
  };
  return (
    <div>
      <h1>how useRef works</h1>

      <input ref={inputRef} type="text" />
      <div>
        <button onClick={handleClick}>click</button>
      </div>
    </div>
  );
};

export default UseRefWork;
