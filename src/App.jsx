import { useCallback, useState } from "react";
import "./App.css";
import Blog from "./feature/Blog";
import Form from "./feature/form";
import Increment from "./feature/Increment";
import Expensive from "./feature/Expensive";

function App() {
  const [count, setCount] = useState(0);
  const [secondCount, setSecondCount] = useState(0);

  const handleIncrementCount = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [])

  const handleSecondIncrementCount = useCallback(() => {
    setSecondCount((prev) => prev + 5);
  }, [])

  return (
    <div className="App">
      <Increment count={count} handleIncrementCount={handleIncrementCount} />
      <Increment count={secondCount} handleIncrementCount={handleSecondIncrementCount} />
      <Form />
      {/* <Blog /> */}
      {/* <Expensive /> */}
    </div>
  );
}

export default App;
