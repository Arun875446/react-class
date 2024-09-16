import arun from "./Button.module.css";
function Button() {
  return (
    <div className={arun.center}>
      <h2 className={arun.sudar}>This is a Button</h2>

      <button className={arun.react}>Click ME</button>
    </div>
  );
}

export default Button;
