import React from "react";

const CallBack2 = React.memo(({ name, addToCart }) => {
  console.log(`${name}: callback2 re-rendered`);
  return (
    <div className="product">
      <h1>{name}</h1>
      <button onClick={() => addToCart()}>add to cart</button>
    </div>
  );
});

CallBack2.displayName = "CallBack2";

export default CallBack2;
