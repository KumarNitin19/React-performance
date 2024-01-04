import composeClass from "../utils/composeClass";

const colorPalette = {
  primary: "blue",
  secondary: "peru",
};

// eslint-disable-next-line react/prop-types
const Button = ({ children, ...props }) => {
  const { variant, color } = { ...props };
  const component = "btn";
  const properties = [variant && variant, color && color];
  const classes = composeClass(component, properties);

  const styles = {
    button: {
      background: variant === "contained" ? colorPalette[color] : "none",
      border:
        variant === "outlined" ? `1px solid ${colorPalette[color]}` : "none",
      color: variant !== "contained" ? colorPalette[color] : "white",
    },
  };

  return (
    <button {...props} className={`btn ${classes}`} style={styles.button}>
      {children}
    </button>
  );
};

export default Button;
