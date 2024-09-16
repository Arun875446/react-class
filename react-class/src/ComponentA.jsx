import { createContext, useState } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext();

const ComponentA = () => {
  const [user, setUser] = useState("React is fun");
  return (
    <UserContext.Provider value={user}>
      <div className="box">
        <h1>Component A</h1>
        <ComponentB />
      </div>
    </UserContext.Provider>
  );
};

export default ComponentA;
