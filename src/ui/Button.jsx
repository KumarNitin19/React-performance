/* eslint-disable react/prop-types */
import { useEffect } from "react";
import composeClass from "../utils/composeClass";
import colorPalette from "../utils/palette";

const Button = ({
  variant = "contained",
  color = "primary",
  children,
  ...props
}) => {
  const component = "btn";
  const properties = [variant && variant, color && color];
  const classes = composeClass(component, properties);

  useEffect(() => {
    addStyle({ variant, color });
  }, []);

  //   console.log("button rendered");

  return (
    <button {...props} className={`btn ${classes}`}>
      {children}
    </button>
  );
};

export default Button;

const addStyle = (btnProp) => {
  const button = ` 
      .btn{
        width:fit-content;
        padding: 4px 8px;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
        background:transparent;
        color:${colorPalette[btnProp?.color]}
      }
      .btn-contained {
        background: ${colorPalette[btnProp?.color]};
        color: white
      }
      .btn-outlined{
        border: 1px solid ${colorPalette[btnProp?.color]}
      }
      `;
  const styled = document.createElement("style");

  styled.innerHTML = button;
  document.head.appendChild(styled);
};
