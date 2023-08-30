import React from "react";
import Project from "./Project";
import { Zoom } from "react-awesome-reveal";

const MainProjects = ({ nav, anime, project }) => {
  return (
    <Zoom
      key={project.id}
      big
      duration={1200}
      delay={500}
      when={anime}
      spy={nav}
    >
      <Project file={project} />
    </Zoom>
  );
};

export default MainProjects;
