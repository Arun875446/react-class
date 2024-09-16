import { useCallback, useState } from "react";
import UseCallBack2 from "./UseCallBack2";

const UseCallBack = () => {
  const [number, setNumber] = useState(18);
  const [dark, setDark] = useState(false);

  // whenever the component re render all the
  // function inside it will get a new reference
  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  console.log("Rerendering");
  // each object and each function will have its own reference
  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
  };

  // const theme2 = {
  //   backgroundColor: dark ? "#333" : "#FFF",
  //   color: dark ? "#FFF" : "#333",
  // };

  // console.log(theme === theme2);

  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle theme
      </button>

      <UseCallBack2 getItems={getItems} />
    </div>
  );
};

export default UseCallBack;
