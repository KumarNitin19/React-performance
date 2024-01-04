import { useState } from "react";
import Button from "../ui/Button";

const Increment = () => {
  const [count, setCount] = useState(0);
  const handleIncrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="increment-root">
      <div className="count-value">{count}</div>
      <Button
        color="primary"
        variant="contained"
        onClick={handleIncrementCount}>
        Increment
      </Button>
    </div>
  );
};

export default Increment;
