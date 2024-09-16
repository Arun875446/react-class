import { useState } from "react";
import "./ListTask.css";

const characters = [
  {
    id: 1,
    name: "Jack Sparrow",
    imageUrl:
      "https://lumiere-a.akamaihd.net/v1/images/e12c6b042ba46e43697492be6bce82e81409abd7.jpeg?region=0,0,450,450&width=320",
  },
  {
    id: 2,
    name: "Will Turner",
    imageUrl:
      "https://i.pinimg.com/736x/41/43/53/41435388e9730712904a5664ae4afcc4.jpg",
  },
  {
    id: 3,
    name: "Elizabeth Swann",
    imageUrl: "https://images6.alphacoders.com/310/310552.jpg",
  },
  {
    id: 4,
    name: "Davy Jones",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaidHpB1RgHkEJK92UBtsF4ksRptM3Cqjmhw&s",
  },
  {
    id: 5,
    name: "Hector Barbossa",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdDFRhADigMQrnvPWHNqlqBQ-RJTEVTtbBmrvY6e9FifwA2124RlGT-5R8OQl08RRMz10&usqp=CAU0ass",
  },
];

const ListTask = () => {
  
  let [filter, setFilter ] = useState("");

  const handleInputChange = (e) => {

    setFilter(e.target.value)

  }

  const filteredCharacters = characters.filter(character => (
  character.name.toLowerCase().includes(filter.toLowerCase())

  ))

  return (
    <div className="filterable-list">
     <input 
     type="text"
     className="filter-input"
     placeholder="Search a Character" 
     onChange={handleInputChange}
     />

     <ul className="character-list">
      {filteredCharacters.map(character =>(
          <li key={character.id} className="character-item">
            <img src={character.imageUrl} className="character-image"/>
            <span>{character.name}</span>
          </li>

      ))


      }
     </ul>
     
    </div>
  );
};

export default ListTask;
