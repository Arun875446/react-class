// import { useState, useEffect } from "react";
// import "./UseEffectColors.css";

// const UseEffectColors = () => {
//   const [box1Color, setBox1Color] = useState("white");
//   const [box2Color, setBox2Color] = useState("white");
//   const [box3Color, setBox3Color] = useState("white");
//   const [box4Color, setBox4Color] = useState("white");
//   const [box5Color, setBox5Color] = useState("white");

//   useEffect(() => {
//     if (box1Color === "clicked") {
//       setBox2Color("red");
//       setBox1Color("white");
//       setBox3Color("white");
//       setBox4Color("white");
//       setBox5Color("white");
//     }
//   }, [box1Color]);

//   useEffect(() => {
//     if (box2Color === "clicked") {
//       setBox2Color("white");
//       setBox1Color("blue");
//       setBox3Color("white");
//       setBox4Color("white");
//       setBox5Color("white");
//     }
//   }, [box2Color]);

//   useEffect(() => {
//     if (box3Color === "clicked") {
//       setBox1Color("white");
//       setBox2Color("white");
//       setBox3Color("white");
//       setBox4Color("brown");
//       setBox5Color("white");
//     }
//   }, [box3Color]);

//   useEffect(() => {
//     if (box4Color === "clicked") {
//       setBox1Color("white");

//       setBox2Color("white");
//       setBox3Color("magenta");
//       setBox4Color("white");
//       setBox5Color("white");
//     }
//   }, [box4Color]);

//   useEffect(() => {
//     if (box5Color === "clicked") {
//       setBox1Color("white");
//       setBox2Color("white");
//       setBox3Color("white");
//       setBox4Color("white");
//       setBox5Color("white");
//     }
//   }, [box5Color]);

//   return (
//     <div className="container">
//       <div
//         onClick={() => setBox1Color("clicked")}
//         style={{ backgroundColor: box1Color }}
//         className="box"
//       >
//         Box 1
//       </div>

//       <div
//         onClick={() => setBox2Color("clicked")}
//         style={{ backgroundColor: box2Color }}
//         className="box"
//       >
//         Box 2
//       </div>

//       <div
//         onClick={() => setBox3Color("clicked")}
//         style={{ backgroundColor: box3Color }}
//         className="box"
//       >
//         Box 3
//       </div>

//       <div
//         onClick={() => setBox4Color("clicked")}
//         style={{ backgroundColor: box4Color }}
//         className="box"
//       >
//         Box 4
//       </div>

//       <div
//         onClick={() => setBox5Color("clicked")}
//         style={{ backgroundColor: box5Color }}
//         className="box"
//       >
//         Reset Box
//       </div>
//     </div>
//   );
// };

// export default UseEffectColors;



import { useState, useEffect } from "react";
import "./UseEffectColors.css";

const UseEffectColors = () => {
  const [box1Color, setBox1Color] = useState("white");
  const [box2Color, setBox2Color] = useState("white");

  useEffect(() => {
    console.log("Effect with no dependency array ran for box1Color");
    if (box1Color === "clicked") {
      setBox2Color("red");
      setBox1Color("white");
    }
  }); // No dependency array

  useEffect(() => {
    console.log("Effect with no dependency array ran for box2Color");
    if (box2Color === "clicked") {
      setBox1Color("blue");
      setBox2Color("white");
    }
  },[box2Color]); // No dependency array

  return (
    <div className="container">
      <div
        onClick={() => setBox1Color("clicked")}
        style={{ backgroundColor: box1Color }}
        className="box"
      >
        Box 1
      </div>

      <div
        onClick={() => setBox2Color("clicked")}
        style={{ backgroundColor: box2Color }}
        className="box"
      >
        Box 2
      </div>
    </div>
  );
};

export default UseEffectColors;
