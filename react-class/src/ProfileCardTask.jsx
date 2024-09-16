import { useState } from "react";
import "./ProfileCardTask.css";

const ProfileCardTask = ({ name, description, hobbies, favoriteFoods }) => {
  const [isPink, setIsPink] = useState(true);

  const toggleColor = () => {
    setIsPink(!isPink);
  };

  const bgColor = isPink ? "pink-gradient" : "blue-gradient";
  const profileColor = isPink ? "Pink" : "Blue";

  return (
    <div className="profile-container">
      <h1 style={{color: "white"}}>The profile card background color is now {profileColor}</h1>
      <div className={`profile-card ${bgColor}`}>
        <button className="toggle-button" onClick={toggleColor}>
          Toggle Color
        </button>
        <h2>{name}</h2>
        <img
          src="https://img1.picmix.com/output/pic/normal/7/2/7/4/8704727_60322.gif"
          alt="Profile"
          className="profile-img"
        />
        <p>{description}</p>
        <h3>Hobbies</h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
        <h3>Favorite Foods</h3>
        <ul>
          {favoriteFoods.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProfileCardTask;
