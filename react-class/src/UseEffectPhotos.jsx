import { useState, useEffect } from "react";
import "./UseEffectPhotos.css";

// Import your images
import image1 from "./assets/cheems.gif";
import image2 from "./assets/css-html.gif";
import image3 from "./assets/elephant-love.gif";
import image4 from "./assets/cat.gif";
import image5 from "./assets/abstract (1).gif";
import image6 from "./assets/abstract (2).gif";
import image7 from "./assets/abstract (3).gif";
import image8 from "./assets/abstract (4).gif";
import image9 from "./assets/abstract (5).gif";

function UseEffectColors() {
  const [box1Image, setBox1Image] = useState(null);
  const [box2Image, setBox2Image] = useState(null);
  const [box3Image, setBox3Image] = useState(null);
  const [box4Image, setBox4Image] = useState(null);
  const [box5Image, setBox5Image] = useState(null);

  useEffect(() => {
    if (box1Image === "clicked") {
      setBox2Image(image2);
      setBox1Image(null);
      setBox3Image(null);
      setBox4Image(null);
      setBox5Image(null);
    }
  }, [box1Image]);

  useEffect(() => {
    if (box2Image === "clicked") {
      setBox1Image(image1);
      setBox2Image(null);
      setBox3Image(null);
      setBox4Image(null);
      setBox5Image(null);
    }
  }, [box2Image]);

  useEffect(() => {
    if (box3Image === "clicked") {
      setBox4Image(image4);
      setBox3Image(null);
      setBox5Image(null);
      setBox2Image(null);
      setBox1Image(null);
    }
  }, [box3Image]);

  useEffect(() => {
    if (box4Image === "clicked") {
      setBox3Image(image3);
      setBox4Image(null);
      setBox5Image(null);
      setBox2Image(null);
      setBox1Image(null);
    }
  }, [box4Image]);

  useEffect(() => {
    if (box5Image === "clicked") {
      setBox1Image(image6);
      setBox2Image(image7);
      setBox3Image(image8);
      setBox4Image(image9);
      setBox5Image(image5);
    }
  }, [box5Image]);

  return (
    <div className="container">
      <div className="box" onClick={() => setBox1Image("clicked")}>
        {box1Image && <img src={box1Image} alt="Box 1" />}
        {!box1Image && "Box 1"}
      </div>
      <div className="box" onClick={() => setBox2Image("clicked")}>
        {box2Image && <img src={box2Image} alt="Box 2" />}
        {!box2Image && "Box 2"}
      </div>
      <div className="box" onClick={() => setBox3Image("clicked")}>
        {box3Image && <img src={box3Image} alt="Box 3" />}
        {!box3Image && "Box 3"}
      </div>
      <div className="box" onClick={() => setBox4Image("clicked")}>
        {box4Image && <img src={box4Image} alt="Box 4" />}
        {!box4Image && "Box 4"}
      </div>
      <div className="box" onClick={() => setBox5Image("clicked")}>
        {box5Image && <img src={box5Image} alt="Reset Box" />}
        {!box5Image && "Surpise✨"}
      </div>
    </div>
  );
}

export default UseEffectColors;
