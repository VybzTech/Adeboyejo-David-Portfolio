import Logo from "./Logo";
import Navigation from "./Navigation";
import { Fade, Flip, JackInTheBox, Zoom } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import Theme from "./Theme";

const Navbar = ({ theme, setTheme }) => {
  // const Navbar = withRouter((props) => {
  //   const { theme, setTheme, history } = props;
  const [navBg, setNavBg] = useState(false);
  const [navControl, setNavControl] = useState(false);

  const setNav = () => {
    if (window.scrollY >= 50) {
      setNavBg(true);
    } else setNavBg(false);
  };
  const clean = () => {
    window.removeEventListener("scroll", () => {});
    window.removeEventListener("DOMContentLoaded", () => {});
  };
  useEffect(() => {
    window.addEventListener("DOMContentLoaded", setNav());
    window.addEventListener("scroll", setNav);
    return clean();
  }, []);

  // FIX BUG THAT DETECTS AFTER LOADING IF THE SCROLL BAR IS ALREADY > 100 SO IT'LL ADD CLASS EVEN WIHTOUT SCROLLING INITIALLY

  return (
    <div className={`navbar ${navBg && "white"}`}>
      <Fade left big triggerOnce>
        <div
          className="logo p-2.5"
          onClick={() => {
            // PUSH LOCATION HISTORY TO /
            document.documentElement.scrollTop = 0;
          }}
        >
          <Logo svgWidth="9vw" svgFill={"#333"} AFill={"#135be8"} />
        </div>
      </Fade>
      <div className={`navigation ${navControl && "show"}`}>
        <JackInTheBox triggerOnce>
          <Navigation setNavControl={setNavControl} />
        </JackInTheBox>
      </div>
      <div className="flex">
        <>
          <Fade up big triggerOnce>
            <Theme theme={theme} setTheme={setTheme} />
          </Fade>
        </>
        <>
          <Fade up big triggerOnce className="menu">
            <button
              className="navBtn"
              onClick={() => {
                setNavControl((shown) => !shown);
              }}
            >
              {!navControl ? ( // MENU
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  focusable="false"
                  aria-hidden="true"
                  stroke="currentColor"
                  fill="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                // X
                <svg
                  strokeWidth="1.5"
                  focusable="false"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  ></path>
                </svg>
              )}
            </button>
          </Fade>
        </>
      </div>
    </div>
  );
};

export default Navbar;
