
import ProfileCardTask from "./ProfileCardTask";
import "./App.css";

const App = () => {
  const profileData = {
    heading: "The profile card background color is now",
    name: "Harry Potter",
    description:
      "Hello! I am Harry, a passionate developer and an avid reader.",
    hobbies: ["Reading", "Traveling", "Cooking"],
    favoriteFoods: ["Pizza", "Sushi", "Ice Cream"],
  };

  return (
    <div className="App">
      <ProfileCardTask
        heading={profileData.heading}
        name={profileData.name}
        description={profileData.description}
        hobbies={profileData.hobbies}
        favoriteFoods={profileData.favoriteFoods}
      />
    </div>
  );
};

export default App;
