import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Input = forwardRef(function (props, ref) {
  return <input ref={ref} {...props} />;
});

export default Input;
