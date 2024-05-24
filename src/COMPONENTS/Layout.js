import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = (props) => {
  const { theme, setTheme, children } = props;

  return (
    <div id="light" className={`${theme ? "dark" : ""}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      {children}
      <Footer />
      <div id="portals" />
    </div>
  );
};

export default Layout;
