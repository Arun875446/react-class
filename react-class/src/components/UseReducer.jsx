// import { useReducer } from "react";

// const initialState = { backgroundColor: "red" };

// const reducer = (state, action) => {
//   switch (action) {
//     case "black":
//       return { backgroundColor: "black" };
//     case "orange":
//       return { backgroundColor: "orange" };
//     default:
//       return state;
//   }
// };

// const UseReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div>
//       <h1 style={{ backgroundColor: state.backgroundColor }}>Hello reducer</h1>
//       <button onClick={()=>dispatch("black")}>change color to black</button>
//       <button onClick={()=>dispatch("orange")}>change color to orange</button>
//     </div>
//   );
// };

// export default UseReducer;

// import { useReducer } from "react";

// const initialState = { backgroundColor: "pink" };

// const reducer = (state, action) => {
//   switch (action) {
//     case "toggle":
//       return {
//         backgroundColor: state.backgroundColor === "pink" ? "orange" : "pink",
//       };
//     default:
//       return state;
//   }
// };

// const UseReducer = () => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   return (
//     <div style={{ backgroundColor: state.backgroundColor }}>
//       <button onClick={() => dispatch("toggle")}>Toggle dark/light mode</button>
//     </div>
//   );
// };

// export default UseReducer;

import { useReducer } from "react";
const initialState = { count: 3 };

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: (state.count = 0) };
    default:
      return state;
  }
};

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {state.count} </h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default UseReducer;
