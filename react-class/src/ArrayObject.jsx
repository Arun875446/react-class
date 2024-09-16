import { useState } from "react";
const ArrayObject = () => {
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carModel, setCarModel] = useState("");
  const [carMake, setCarMake] = useState("");

  const addCar = () => {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarModel("");
    setCarMake("");
  };

  const removeCar = (index) => {
    setCars((c) => c.filter((_, i) => i !== index));
    // setCars( cars=> cars.filter((_, i)=> i !== index))
  };

  const yearChange = (event) => {
    setCarYear(event.target.value);
  };

  const makeChange = (event) => {
    setCarMake(event.target.value);
  };

  const modelChange = (event) => {
    setCarModel(event.target.value);
  };

  return (
    <div>
      <h1>List of Car Objects</h1>
      <ul>
        {cars.map((car, index) => (
          <li onClick={() => removeCar(index)} key={index}>
            Car Make: {car.make}, Car Model: {car.model}, Car Year: {car.year}
          </li>
        ))}
      </ul>

      <input onChange={yearChange} type="number" value={carYear} />
      <br />
      <input
        onChange={makeChange}
        type="text"
        placeholder="Enter Car Make"
        value={carMake}
      />
      <br />
      <input
        onChange={modelChange}
        type="text"
        placeholder="Enter Car Model"
        value={carModel}
      />
      <br />
      <button onClick={addCar}>Add Car</button>
    </div>
  );
};

export default ArrayObject;
