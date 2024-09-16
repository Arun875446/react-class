import { useCallback, useEffect, useState } from "react";

import CallBack2 from "./CallBack2";

const CallBack = () => {
  const [prod, setprod] = useState(["product 1", "product 2"]);
  const [count, setcount] = useState(0);
  const [cart, setcart] = useState(0);

  const addToCart = useCallback(() => {
    console.log(cart);
    setcart(cart + 1);
  },[count]);

  // useEffect(() => {
  //   setcart(cart + 1);
  //   console.log(count, "useffect called");
  // }, []);

  return (
    <div className="App">
      <h3>Count: {count}</h3>
      <button onClick={() => setcount(count + 1)}>+ count</button>

      <h3>Cart: {cart}</h3>
      <div className="prod-wrapper">
        {prod.map((p, i) => {
          return <CallBack2 name={p} addToCart={addToCart} key={i} />;
        })}
      </div>
    </div>
  );
};

export default CallBack;
