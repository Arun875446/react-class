import { useParams } from "react-router-dom";
const ProfilePage = () => {
  const params = useParams();
  return (
    <div>
      <h1>Profile Page {params.profileId} </h1>
    </div>
  );
};

export default ProfilePage;
