import React, { useState } from "react";
import Form from "./Form";
import "./App.css";

const App = () => {
  const [phrase, setPhrase] = useState("this phrase");
  const [name, setName] = useState({ first: "", last: "" });

  const [count, setCount] = useState(0);

  const handleChange = (evt) => {
    setPhrase(evt.target.value);
  };

  const updateName = (evt) => {
    let field = evt.target.name;
    let value = evt.target.value;
    setName({ ...name, [field]: value });
  };

  return (
    <div>
      <div>{phrase}</div>
      <input onChange={handleChange} />
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Click</button>
      {name.first}, {name.last}
      <Form label="first" value={name.first} onChange={updateName} />
      <Form label="last" value={name.last} onChange={updateName} />
    </div>
  );
};

export default App;
