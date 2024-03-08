import { useRef } from "react";
import { useEffect, useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const Form = () => {
  const [password, setPassword] = useState("");
  const nameRef = useRef();

  const handleSubmit = () => {
    console.log(nameRef.current.value);
  };


  return (
    <div className="form">
      <Input type="text" placeholder="Email" ref={nameRef} />
      <Input
        type="text"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button color="primary" variant="contained" onClick={handleSubmit}>
        Submit
      </Button>

      <div className="form-data">
        <div>Email: </div>
        <div>Password: {password || "-"}</div>
      </div>
    </div>
  );
};



export default Form;
