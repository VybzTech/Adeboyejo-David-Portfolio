import React from "react";
import Navbar from "./Navbar";

const Layout = (props) => {
  const { theme, setTheme, children } = props;

  return (
    <div id="light" className={`${theme ? "dark" : ""}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
      <div id="portals" />
    </div>
  );
};

export default Layout;
