import { useState, useEffect } from "react";

function VirtualDOMComponent({ updateBoth }) {
  const [items, setItems] = useState([]);

  const updateVirtualDOM = () => {
    const startTime = performance.now();
    const newItems = [];
    for (let i = 0; i < 10000; i++) {
      newItems.push(`Item ${i}`);
    }
    setItems(newItems);
    const endTime = performance.now();
    return endTime - startTime;
  };

  // Set the update function in the useRef object on mount
  useEffect(() => {
    updateBoth.current.updateVirtualDOM = updateVirtualDOM;
  }, [updateBoth]);

  return (
    <div>
      <button
        onClick={() =>
          alert(`Virtual DOM update took ${updateVirtualDOM()} milliseconds`)
        }
      >
        Update Virtual DOM
      </button>
      <div>
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default VirtualDOMComponent;
