import React, { useState } from "react";

import "./App.css";
import UserInput from "./components/userInput";
import UserOutput from "./components/userOutput";
import ValidationComponent from "./components/validate";
import CharComponent from "./components/charComponent";

function App() {
  const [text, setText] = useState("");
  const [rect, setRect] = useState([]);
  const handleChange = e => {
    setText(e.target.value);
  };
  console.log(text.split(""));
  return (
    <div className="App">
      {/* <UserInput/>
       <UserOutput/> */}
      <input type="text" onChange={handleChange} value={text} />
      <p>{text.length}</p>
      <ValidationComponent textLength={text.length} />
      {text.split("").map((item, index) => {
        return <CharComponent key={index} letter={item} />;
      })}
      {rect.map(item => {
        return <h1>{item.key}</h1>;
      })}
    </div>
  );
}

export default App;
