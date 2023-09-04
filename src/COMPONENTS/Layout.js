import React from "react";
import Navbar from "./Navbar";
import Theme from "../COMPONENTS/Theme";

const Layout = (props) => {
  const { theme, setTheme, children } = props;

  return (
    <div id="light" className={`${theme ? "dark" : ""}`}>
      <Navbar theme={theme} setTheme={setTheme}/>
      {/* <Theme theme={theme} setTheme={setTheme} /> */}
      {children}
      <div id="portals" />
    </div>
  );
};

export default Layout;
