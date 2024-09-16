import ComponentD from "./ComponentD";
import { UserContext } from "./ComponentA";
import { useContext } from "react";
const ComponentC = () => {
  const user = useContext(UserContext);
  return (
    <div className="box">
      <h2>Component C</h2>
      <h3>{user} is from ComponentA context</h3>

      <ComponentD />
    </div>
  );
};

export default ComponentC;
