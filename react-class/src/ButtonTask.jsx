import { useState } from "react";
import "./ButtonTask.css";

const ButtonTask = () => {
  const [isTrue, setIsTrue] = useState(true);
  const [showRevealButton, setShowRevealButton] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const bulletTrain =
    "https://www.sonypictures.com/sites/default/files/styles/max_560x840/public/title-key-art/bullettrain_onesheet_1400x2100_v4.jpg?itok=khOUNLFM";
  const reacher =
    "https://m.media-amazon.com/images/M/MV5BOWRiZjYwZjUtYmIwMy00ZDUzLTk2NjktZmJkZjRkNjU0MDE3XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_.jpg";

  const toggleState = () => {
    setIsTrue(!isTrue);
    setShowRevealButton(true)
  
  };

  const revealImage = () => {

    setShowImage(true)
  }
  return (
    <div className="container">
      <p>The state is now: {isTrue ? "True" : "False"} </p>
      <button
        className={`change-state-button ${
          isTrue ? "true-state" : "false-state"
        }`}
        onClick={toggleState}
      >
        Change State
      </button>
      <br />
      {showRevealButton && (
        <button onClick={revealImage}
          className={`reveal-beast-button ${
            isTrue ? "true-state" : "false-state"
          }`}
        >
          Reveal movie image
        </button>
      )}
      {

        showImage && (
            <div>
              <img src={isTrue ? bulletTrain : reacher} 
              alt={isTrue ? "Bullet Train image" : "Reacher image"}
              />
              </div>

        )
      }
    </div>
  );
};

export default ButtonTask;
