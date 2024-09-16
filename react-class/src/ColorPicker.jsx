import { useState } from "react";

const ColorPicker = () => {
const [color, setColor]= useState("#000000")

const colorChange = (e) => {

  setColor(e.target.value)

}

  return (
    <div>
     <h1>Color Picker</h1>
     <div style={{backgroundColor: color }}>
            <p>Selected Color: {color} </p>
     </div>
     <label >Select a Color</label>
     <input type="color" onChange={colorChange}  />
    </div>
  );
};

export default ColorPicker;
