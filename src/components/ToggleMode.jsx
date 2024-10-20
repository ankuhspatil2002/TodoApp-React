import React, { useState, useEffect } from "react";
import "./toggleMode.css";

const ToggleMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Apply the theme when the component mounts or theme changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme); // Persist theme on reload
  }, [theme]);

  // Toggle between light and dark themes
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
