import "./Footer.css";
function Footer() {
  return (
    <footer style={{ textAlign: "center" }} className="footer">
      <p>&copy; Copyright Arun {new Date().getFullYear()}</p>
    </footer>
  );
}

export default Footer;
