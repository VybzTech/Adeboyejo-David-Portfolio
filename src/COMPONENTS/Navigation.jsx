import React from "react";
import { withRouter } from "react-router-dom";

const Navs = [
  { nav: "Home", path: "/" },
  { nav: "About", path: "/about" },
  {
    nav: "Projects",
    path: "/projects",
  },
  { nav: "Contact", path: "/contact" },
];

const Navigation = withRouter((props) => {
  const { history, setNavControl } = props;

  return (
    <>
      <div>
        {Navs?.map((nav) => {
          return (
            <button
              key={nav.nav}
              className={`nav ${
                history?.location?.pathname.toLowerCase() === nav.path
                  ? "active"
                  : ""
              } `}
              onClick={() => {
                history.push(nav.path);
                document.documentElement.scrollTop = 0;
                setNavControl((n) => !n);
              }}
            >
              {nav.nav}
            </button>
          );
        })}
      </div>
      <div>
        <button className="close">Close</button>
      </div>
    </>
  );
});

export default Navigation;
