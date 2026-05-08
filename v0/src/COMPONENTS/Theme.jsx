import React from "react";
import Moon from "../ICONS/Moon";
import Sun from "../ICONS/Sun";
const Theme = ({ theme, setTheme }) => {
  return (
    <div className="theme">
      <button
        onClick={() => {
          setTheme((t) => !t);
        }}
      >
        {theme ? <Moon /> : <Sun />}
      </button>
    </div>
  );
};

export default Theme;
