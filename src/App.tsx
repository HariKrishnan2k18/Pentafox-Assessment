import { useState } from "react";
import "./App.css";

const App = () => {
  const positionArray = [
    { top: 0, left: 0 },
    { top: 0, left: 350 },
    { top: 350, left: 350 },
    { top: 350, left: 0 }
  ];

  const [positionIndex, setPositionIndex] = useState(0);

  const [count, setCount] = useState(0);

  const handleNext = () => {
    setPositionIndex((index) => (index === 3 ? 0 : index + 1));
    setCount(count + 1);
  };

  const handlePrev = () => {
    setPositionIndex((index) => (index === 0 ? 3 : index - 1));
    setCount(count - 1);
  };

  const handleReset = () => {
    setPositionIndex(0);
    setCount(0);
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        style={{
          width: "400px",
          height: "400px",
          border: "2px solid black",
          marginBottom: "20px",
          position: "relative"
        }}
      >
        <div
          style={{
            width: "50px",
            height: "50px",
            top: `${positionArray[positionIndex].top}px`,
            left: `${positionArray[positionIndex].left}px`,
            position: "absolute",
            border: "2px solid black"
          }}
        ></div>
      </div>

      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={handlePrev}>Prev</button>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleReset}>Reset</button>
        <button>Count: {count}</button>
      </div>
    </div>
  );
};

export default App;
