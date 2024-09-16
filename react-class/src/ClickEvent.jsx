// const ClickEvent = () => {
//   const handleClick = (name) => {
//     console.log(`${name} Button Clicked`);
//   };

//   return (
//     <>
//       {/* <button onClick={handleClick}>Click</button> */}
//       <button onClick={()=>handleClick("john")}>Click</button>
//     </>
//   );
// };

// export default ClickEvent;

// const ClickEvent = () => {
//   let count = 0;

//   const handleClick = (name) => {
//     if (count <= 3) {
//       count++;
//       console.log(`${name} Clicked the button ${count} times`);
//     } else {
//       console.log("Maximum limit reached");
//     }
//   };
//   return (
//     <div>
//       <button onClick={() => handleClick("name")}>Click ME</button>
//     </div>
//   );
// };

// export default ClickEvent;

const ClickEvent = () => {
  const handleClick = (e) => {
    e.target.textContent = "🏝️🍹⛱️🌞🌊";
  };

  return (
    <>
      {/* <button onDoubleClick={handleClick}>😎👌🔥</button> */}
      <button onClick={handleClick}>😎👌🔥</button>
    </>
  );
};

export default ClickEvent;
