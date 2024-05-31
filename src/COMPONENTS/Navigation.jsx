import React from "react";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

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
                navigate(nav.path);
                document.documentElement.scrollTop = 0;
                setNavControl((n) => !n);
                document.title = `Adeboyejo David | ${
                  nav.nav !== "Home" ? nav.nav : "React JS Developer"
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
