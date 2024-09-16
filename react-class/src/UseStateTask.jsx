import { useState } from "react";
import  "./UseStateTask.css"
import propTypes from "prop-types"
const UseStateTask = ({title, imageUrl, description}) => {

  const [follow, setFollow] = useState(true)

  const toggleFollow = () => {

    setFollow(!follow) 
  } 

  return (
    <div className="user-profile-card">
      <img 
      src={imageUrl} 
      alt={`${title} image`}
      className="user-profile-image"
      />
      <h2 className="user-profile-name">{title}</h2>
      <p className="user-profile-bio">{description}</p>
      <button className="follow-button" onClick={toggleFollow}>
        {follow? "Follow": "Unfollow"}
      </button>
    </div>
  );
};

UseStateTask.propTypes = {
 
  title: propTypes.string,
  imageUrl: propTypes.string,
  description: propTypes.string
}

UseStateTask.defaultProps = {
  title: "Title",
  imageUrl: "https://via.placeholder.com/150",
  description: "Description"
}

export default UseStateTask;
