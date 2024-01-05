import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Form = () => {
  const [email, setEmail] = useState("");
  //   const [name, setName] = useState("");
  //   const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const handleSubmit = () => {};

  useEffect(() => {
    if (darkMode) {
      document.body.style.background = "black";
      document.body.style.color = "white";
    } else {
      document.body.style.background = "white";
      document.body.style.color = "black";
    }
  }, [darkMode]);

  return (
    <div className="form">
      {/* <Input type="text" placeholder="Name" />
      <Input type="text" placeholder="Full name" /> */}
      <Input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <Input type="number" placeholder="Phone number" /> */}
      <Input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="checkbox"
        name="mode"
        onChange={(e) => setDarkMode(e.target.checked)}
      />
      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>

      <div className="form-data">
        <div>Email: {email || "-"}</div>
        <div>Password: {password || "-"}</div>
      </div>
    </div>
  );
};

export default Form;
