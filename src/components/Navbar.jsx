import React from "react";
import "./Navbar.css";
import ToggleMode from "./ToggleMode";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="logo">Todo App</div>
      <div className="darkMode">
        <ToggleMode />
      </div>
    </div>
  );
};

export default Navbar;
