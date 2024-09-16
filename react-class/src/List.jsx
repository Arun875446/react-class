import propTypes from "prop-types";
const List = (props) => {
  const appItems = props.items;
  const appCategory = props.category;

  const fruitList = appItems.map((fruit) => (
    <li key={fruit.id}>
      {fruit.name}: <b>{fruit.calories}</b>
    </li>
  ));

  return (
    <>
      <h1>{appCategory}</h1>
      <ol>{fruitList}</ol>
    </>
  );
};

List.propTypes = {
  category: propTypes.string,
  items: propTypes.array,
};

List.defaultProps = {
  category: "Default",
  items: [],
};
export default List;

// fruits.sort((a, b) => b.name.localeCompare(a.name));

// fruits.sort((a, b) => b.calories - a.calories);

// fruits.sort((a, b) => a.calories - b.calories);

// const lowCal = fruits.filter((fruit) => fruit.calories < 50);

// const highCal = fruits.filter((fruit) => fruit.calories > 50);
