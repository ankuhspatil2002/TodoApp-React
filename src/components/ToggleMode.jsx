import React from "react";
import "./toggleMode.css";
import { useState } from "react";

const ToggleMode = () => {
  const [clicked, setClicked] = useState(false);
  const [toggle, setToggle] = useState("fa-regular fa-moon");

  let handleClick = () => {
    setClicked(!clicked);
    if (clicked) {
      setToggle("fa-regular fa-sun");
    } else {
      setToggle("fa-regular fa-moon");
    }
  };

  return (
    <div className="toggleButton" onClick={handleClick}>
        <i className={toggle}></i>
    </div>
  );
};

export default ToggleMode;
