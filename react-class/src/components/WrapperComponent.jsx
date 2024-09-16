const WrapperComponent = ({ children }) => {
  return (
    <div style={{ backgroundColor: "yellow", color: "red" }}>{children}</div>
  );
};

export default WrapperComponent;
