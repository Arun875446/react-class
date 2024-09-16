import { useState, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  // const doubleNumber = useMemo(() => {
  //   return slowFunction(number);
  // }, [number]);

  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  // const themeStyles2 = {
  //   backgroundColor: dark ? "black" : "white",
  //   color: dark ? "white" : "black",
  // };

  // console.log(themeStyles === themeStyles2);

  return (
    <>
      <input
        type="text"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />

      <button onClick={() => setDark((d) => !d)}>Change Theme</button>
      {/* <div style={themeStyles}>{slowFunction(number)}</div> */}
      <div style={themeStyles}>{slowFunction(number)}</div>
    </>
  );
};

const slowFunction = (number) => {
  console.log("Calling slow function");
  for (let i = 0; i < 1000000000; i++) {} // Simulate a slow computation
  return number * 2;
};

export default UseMemo;
