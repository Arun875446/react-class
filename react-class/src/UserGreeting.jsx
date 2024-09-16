// const UserGreeting = (props) => {
//   if (props.isLoggedIn) {
//     return <h2>Welcome {props.username}</h2>;
//   } else {
//     return <h2>Please Login</h2>;
//   }
// };

// export default UserGreeting;

// const UserGreeting = (props) => {
//   return props.isLoggedIn ? (
//     <h2>Welcome {props.username}</h2>
//   ) : (
//     <h2>Please Login {props.username}</h2>
//   );
// };

// export default UserGreeting;

const UserGreeting = (props) => {
  const WelcomeMessage = <h2>Welcome {props.username}</h2>;

  const prompt = <h2>Please Login {props.username}</h2>;

  return props.isLoggedIn ? WelcomeMessage : prompt;
};

export default UserGreeting;
