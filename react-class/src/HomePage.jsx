import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <Link to="/categories">Categories</Link>
    </div>
  );
};

export default HomePage;
