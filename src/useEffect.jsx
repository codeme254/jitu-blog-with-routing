import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const handleAddValue = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    console.log("Count has changed");
    if (count == 3) {
      console.log("Device blocked");
    }
  }, [count]);

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleAddValue}>add value</button>
    </>
  );
}

export default App;
