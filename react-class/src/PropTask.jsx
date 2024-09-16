import "./PropTask.css";
import propTypes from "prop-types";
const PropTask = ({ title, imageUrl, description }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt={`${title} image`} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">{description}</p>
    </div>
  );
};

PropTask.propTypes = {
  title: propTypes.string,
  imageUrl: propTypes.string,
  description: propTypes.string,
};

PropTask.defaultProps = {
  title: "Default Title",
  imageUrl: "https://via.placeholder.com/300",
  description: "Default Description",
};

export default PropTask;
