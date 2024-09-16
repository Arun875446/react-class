import { NavLink, Outlet } from "react-router-dom";

const ProfilesPage = () => {
  const profiles = [1, 2, 3, 4, 5];

  return (
    <>
      <div>
        <h2>Profiles Page</h2>
        {profiles.map((profile) => (
          <NavLink
            key={profile}
            to={`/profiles/${profile}`}
            style={({ isActive }) => ({
              color: isActive ? "magenta" : "blue",
              textDecoration: "none",
            })}
          >
            Profile: {profile}
          </NavLink>
        ))}
      </div>

      <Outlet />
    </>
  );
};

export default ProfilesPage;
