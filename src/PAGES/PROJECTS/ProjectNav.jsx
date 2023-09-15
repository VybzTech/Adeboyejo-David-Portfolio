import React, { useState, useEffect } from "react";
import { Slide } from "react-awesome-reveal";
import All from "../../ICONS/PROJECTS/All.png";
import Briefcase from "../../ICONS/PROJECTS/Briefcase.png";
import InProgress from "../../ICONS/PROJECTS/InProgress.png";
import ReactImg from "../../ICONS/PROJECTS/React.png";
import Completed from "../../ICONS/PROJECTS/Completed.png";
import UIUX from "../../ICONS/PROJECTS/UI-UX.png";
const ProjectNav = ({ nav, setNav, anime }) => {
  const FILTERS = [
    { name: "All", img: All },
    { name: "Completed", img: Completed },
    { name: "InProgress", img: InProgress },
    { name: "React", img: ReactImg },
    { name: "UI/UX", img: UIUX },
    { name: "Briefcase", img: Briefcase },
  ];
  const [stick, stickNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.documentElement.scrollTop >=
        document.documentElement.clientHeight - 30
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
    <nav className={`projectNav ${stick && "stck"}`}>
      <div>
        <Slide left spy={anime} triggerOnce delay={1500}>
          {FILTERS.map(({ name, img }) => {
            return (
              <button
                className={`${nav === name ? "active" : ""} Nav`}
                key={name}
                onClick={() => setNav(name)}
              >
                <img src={img} alt={name} />
                <span>{name}</span>
              </button>
            );
          })}
        </Slide>
      </div>
    </nav>
  );
};

export default ProjectNav;
