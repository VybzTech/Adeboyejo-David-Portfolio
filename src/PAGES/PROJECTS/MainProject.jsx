import React from "react";
import Project from "./Project";
import { Zoom } from "react-awesome-reveal";

const MainProject = ({ nav, project }) => {
  const { name, content, utilities, img1, git, link } = project;
  return (
    <Zoom
      key={project.id}
      big
      triggerOnce
      left
      // duration={1200}
      delay={1500}
      // when={anime}
      spy={nav}
      className="MainProject"
    >
      <div className="img">
        
      </div>
      {/* <div
      className="img"
      style={{
        backgroundImage: `linear-gradient(180deg, #0001, #0002),url(${img1})`,
      }}
    > */}
      <div className="contentWrapper">
        <h4>{name}</h4>
        <p>{content.length > 200 ? content.substr(0, 50) + "..." : content}</p>
        {/* <div className="actions">
          <button
            onClick={() => {
              window.open(git, "_blank");
            }}
          >
            <></>
          </button>
          https://www.figma.com/file/NNPdiNOfJKjTqvE7apPNHw/David's-Portfolio?type=design&node-id=220-633&mode=design
          <button
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            <></>
          </button>
        </div> */}
        {/* <ul>
          {utilities?.map((util) => {
            return <li key={util}>{util}</li>;
          })}
        </ul> */}
      </div>
      {/* </div> */}
    </Zoom>
  );
};

export default MainProject;
