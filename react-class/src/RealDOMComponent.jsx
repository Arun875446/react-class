import  { useRef, useEffect } from "react";

function RealDOMComponent({ updateBoth }) {
  const realDomRef = useRef(null);

  const updateRealDOM = () => {
    const startTime = performance.now();
    for (let i = 0; i < 10000; i++) {
      const div = document.createElement("div");
      div.innerHTML = `Item ${i}`;
      realDomRef.current.appendChild(div);
    }
    const endTime = performance.now();
    return endTime - startTime;
  };

  // Set the update function in the useRef object on mount
  useEffect(() => {
    updateBoth.current.updateRealDOM = updateRealDOM;
  }, [updateBoth]);

  return (
    <div>
      <button
        onClick={() =>
          alert(`Real DOM update took ${updateRealDOM()} milliseconds`)
        }
      >
        Update Real DOM
      </button>
      <div ref={realDomRef}></div>
    </div>
  );
}

export default RealDOMComponent;
