import React, { useState, useEffect } from "react";
import "./ToggleMode.css";

const ToggleMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeToggle = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button className="toggleButton" onClick={handleThemeToggle}>
      {theme === "light" ? (
        <i className="fa-regular fa-moon"></i>
      ) : (
        <i className="fa-regular fa-sun"></i>
      )}
    </button>
  );
};

export default ToggleMode;
