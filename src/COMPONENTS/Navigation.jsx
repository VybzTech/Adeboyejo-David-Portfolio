import React from "react";

const Navs = [
  { nav: "Home", path: "/" },
  { nav: "About", path: "/about" },
  {
    nav: "Projects",
    path: "/projects",
  },
  { nav: "Contact", path: "/contact" },
];

const Navigation = ({ setNavControl }) => {
  // const Navigation = withRouter((props) => {
  // const { history, setNavControl } = props;
  return (
    <>
      <div>
        {Navs?.map((nav) => {
          return (
            <button
              key={nav.nav}
              className={`nav${
                window?.location?.pathname.toLowerCase() === nav.path
                  ? // history?.location?.pathname.toLowerCase() === nav.path
                    " active"
                  : ""
              }`}
              onClick={() => {
                // history.push(nav.path);
                document.documentElement.scrollTop = 0;
                setNavControl((n) => !n);
                document.title = `Adeboyejo David | ${
                  nav.nav !== "Home" ? nav.nav : "React .NET Developer"
                }`;
              }}
            >
              {nav.nav}
            </button>
          );
        })}
      </div>
      <div>
        <button className="close" onClick={() => setNavControl((n) => !n)}>
          Close
        </button>
      </div>
    </>
  );
};

export default Navigation;
