// import { useState, useEffect } from "react";
// import data from "./data.json";

// const UseEffectPage = () => {
//   const [pageIndex, setPageIndex] = useState(0);
//   const [content, setContent] = useState({});
//   useEffect(() => {
//     setContent(data.pages[pageIndex]);
//   });

//   const handlePageChange = () => {
//     setPageIndex((p) => (p + 1) % data.pages.length);
//   };

//   return (
//     <div style={{ textAlign: "center", padding: "20px" }}>
//       <h1>{content.heading}</h1>
//       <p>{content.paragraph}</p>
//       {/* {content.image && <img src={content.image} alt={content.heading}/>} */}
//       {content.image ? (<img src={content.image} alt={content.heading}/>) : (<h1>Image not available</h1>) }
//       <button
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           padding: "10px 20px",
//           fontSize: "16px",
//         }}
//         onClick={handlePageChange}
//       >
//         Next Page
//       </button>
//     </div>
//   );
// };

// export default UseEffectPage;

import { useState, useEffect } from "react";
import data from "./data.json";

function UseEffectPage() {
  const [pageIndex, setPageIndex] = useState(0); // Keeps track of the current page
  const [content, setContent] = useState({}); // Stores the content of the current page
  const [counter, setCounter] = useState(0); // Keeps track of the counter value

  useEffect(() => {
    console.log("useEffect triggered!");
    setContent(data.pages[pageIndex]);
  }, [pageIndex]); // Removed the dependency array (no dependencies specified)

  const handleNextPage = () => {
    setPageIndex((prevIndex) => (prevIndex + 1) % data.pages.length);
  };

  const incrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>{content.heading}</h1>
      
      <p>{content.paragraph}</p>
      {/* {content.image && <img src={content.image} alt={content.heading} />} */}
      {content.image ? (<img src={content.image} alt={content.heading}/>) : (<h1>Image not available</h1>) }
      <button
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          fontSize: "16px",
        }}
        onClick={handleNextPage}
      >
        Next Page
      </button>

      <button
        style={{
          position: "fixed",
          bottom: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "10px 20px",
          fontSize: "16px",
        }}
        onClick={incrementCounter}
      >
        Increment Counter
      </button>

      <div style={{ marginTop: "20px" }}>
        <h2>Counter: {counter}</h2>
      </div>
    </div>
  );
}

export default UseEffectPage;
