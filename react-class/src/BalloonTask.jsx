import { useState, useEffect } from "react";
import "./BalloonTask.css"; // Add necessary CSS for rocket animation

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const RocketTask = () => {
  const [countdown, setCountdown] = useState(5);
  const [clickable, setClickable] = useState(false);
  const [rocketColor, setRocketColor] = useState("");
  const [showRocket, setShowRocket] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setClickable(true);
    }
  }, [countdown]);

  const handleButtonClick = () => {
    if (clickable) {
      setRocketColor(getRandomColor());
      setShowRocket(true);
      setTimeout(() => {
        setShowRocket(false);
        setClickable(false);
        setCountdown(5);
      }, 3000);
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick} disabled={!clickable}>
        {clickable ? "Click Me!" : `Wait: ${countdown}`}
      </button>
      {showRocket && (
        <img
          src="rocket.png"
          alt="rocket"
          className="rocket"
          style={{ filter: `hue-rotate(${Math.random() * 360}deg)` }}
        />
      )}
    </div>
  );
};

export default RocketTask;
