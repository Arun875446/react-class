import "./Header.css";
function Header() {
  return (
    <div className="header">
      <h1 style={{ color: "blue", textAlign: "center" }}>
        Welcome to React website
      </h1>
      <nav>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            gap: "1em",
            justifyContent: "center",
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
