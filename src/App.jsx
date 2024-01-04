import { useState } from "react";
import "./App.css";
import Button from "./ui/Button";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <div className="text-lg">{count}</div>
      <Button
        onClick={handleIncrementCount}
        color="secondary"
        variant="contained">
        Increment
      </Button>
    </div>
  );
}

export default App;
