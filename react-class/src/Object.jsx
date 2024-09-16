import { useState } from "react";

const Object = () => {
  const [car, setCar] = useState({

    name: "BMW",
    year: 1995,
    model: "X5",
  })

  const yearChange = (event) => {
    setCar(c => ({...c, year:event.target.value}))
  }

  const nameChange = (event) => {
    setCar(c => ({...c, name:event.target.value}))
  }

  const modelChange = (event) => {
    setCar(c =>  ({...c, model:event.target.value}))
  }

 
  return (
    <>
      <p>Your Favorite Car is {car.name} {car.model} {car.year}</p>

      <input type="number" value={car.year} onChange={yearChange} />
      <br />
      <input type="text" value={car.name} onChange={nameChange} />
      <br />
      <input type="text" value={car.model} onChange={modelChange} />
    </>
  );
};

export default Object;
