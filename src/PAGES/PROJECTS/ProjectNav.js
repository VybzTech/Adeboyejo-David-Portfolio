import React, { useState, useEffect } from "react";
import { Flip } from "react-awesome-reveal";
// import { Button } from "@material-ui/core";
// import { Flip } from "react-awesome-reveal";

const ProjectNav = ({ nav, setNav, anime }) => {
  const FILTERS = ["All", "Completed", "In-Progress", "React", "UI/UX"];
  const [stick, stickNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop >=
        document.documentElement.clientHeight - 20
      ) {
        stickNav(true);
      } else {
        stickNav(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [stick]);

  return (
    <nav className={`projectNav ${stick && "stick"}`}>
      <Flip top spy={anime}>
        <div>
          {FILTERS.map((btn) => {
            return (
              <button
                key={btn}
                onClick={() => {
                  setNav(btn);
                }}
                className={`${nav === btn ? "active" : ""}`}
              >
                {btn}
              </button>
            );
          })}
        </div>
      </Flip>
    </nav>
  );
};

export default ProjectNav;
