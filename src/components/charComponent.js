import React from "react";
import "./index.css";

const CharComponent = props => {
  return <div className="charBox">{props.letter}</div>;
};

export default CharComponent;
