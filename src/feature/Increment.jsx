import { memo } from "react";
import Button from "../ui/Button";

const Increment = ({ handleIncrementCount, count }) => {

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

export default memo(Increment);
