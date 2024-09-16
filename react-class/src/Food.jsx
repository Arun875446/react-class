import cat from "./assets/cat.webp";
function Food() {
  // you have to create Javascript outside or top of return,
  const food1 = "Biryani";
  const food2 = "pizza";

  return (
    // you have to use Javascript inside the return
    <div style={{ textAlign: "center" }}>
      <h1>Food Component</h1>

      <img src={cat} alt="" />
      <ul style={{ listStyle: "none" }}>
        <li>{food1}</li>
        <li>{food2}</li>
        <li>Burger</li>
      </ul>
    </div>
  );
}

export default Food;
