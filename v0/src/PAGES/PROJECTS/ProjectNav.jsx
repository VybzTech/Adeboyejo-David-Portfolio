import React from "react";
import { Slide } from "react-awesome-reveal";
import All from "../../ICONS/PROJECTS/All.png";
import InProgress from "../../ICONS/PROJECTS/InProgress.png";
import ReactImg from "../../ICONS/PROJECTS/React.png";
import Completed from "../../ICONS/PROJECTS/Completed.png";
import UIUX from "../../ICONS/PROJECTS/UI-UX.png";
const ProjectNav = ({ nav, setNav }) => {
  const FILTERS = [
    { name: "All", img: All },
    { name: "Completed", img: Completed },
    { name: "In-Progress", img: InProgress },
    { name: "React", img: ReactImg },
    { name: "UI/UX", img: UIUX },
  ];

  return (
    <nav className="projectNav">
      <div>
        <Slide left triggerOnce delay={1500}>
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
