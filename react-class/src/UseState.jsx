// import { useState } from "react";
// const UseState = () => {
//   // let [name, setName] = useState();
//   let [name, setName] = useState("john");
//   let [age, setAge] = useState(0);
//   // name is the variable, setName is the setter function

//   const updateName = () => {
//     setName("Rohit");
//   };

//   const updateAge = () => {
//     setAge(age + 1);
//   };

//   return (
//     <>
//       <p>Name: {name} </p>
//       <button onClick={updateName}>change name</button>

//       <p>Age: {age} </p>
//       <button onClick={updateAge}>change name</button>

//     </>
//   );
// };

import { useState } from "react";

const UseState = () => {
  let [count, setCount] = useState(0);

  // const increment = () => {
  //   setCount(count + 1);
  // };

  // const decrement = () => {
  //   setCount(count - 1);
  // };

  // const reset = () => {
  //   setCount(0);
  // };

  return (
    <>
      <p>Count: {count} </p>
      {/* <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button> */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </>
  );
};

export default UseState;
