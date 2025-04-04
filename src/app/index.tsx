import "./styles.css";
import { useState } from "react";

export const App = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="page">
      <div className="card">
        <button onClick={handleClick} className="button">
          Counter: {count}
        </button>
      </div>
    </div>
  );
};
