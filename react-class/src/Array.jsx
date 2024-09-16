import { useState } from "react";

const Array = () => {
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

  const addFood = () => {
    const newFood = document.getElementById("foodInput").value;
    document.getElementById("foodInput").value = "";
    setFoods([...foods, newFood]);
  };

  // const removeFood = (event) => {
  //   event.target.remove();
  // };


  const removeFood = (index) => {
    setFoods(foods.filter((food, i)=> i !== index))
    // setFoods(foods.filter((food, i)=> i == index))
  };


  return (
    <div>
      <h2>List of foods</h2>
      <ul>
        {/* {foods.map((food, index) => (
          <li onClick={()=>removeFood(event)} key={index}>
            {food}
          </li>
        ))} */}
          {foods.map((food, index) => (
          <li onClick={()=>removeFood(index)} key={index}>
            {food}
          </li>
        ))}
      </ul>
      <input id="foodInput" type="text" placeholder="Enter food name" />
      <button onClick={addFood}>Add Food</button>
    </div>
  );
};

export default Array;
