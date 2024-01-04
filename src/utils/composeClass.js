const composeClassName = (utility, identifiers) => {
  const classes = identifiers
    .map((key) => (key ? `${utility}-${key}` : null))
    ?.join(" ");
  return classes;
};

export default composeClassName;
