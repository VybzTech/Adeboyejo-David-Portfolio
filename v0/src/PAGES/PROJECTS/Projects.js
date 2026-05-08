// import Video from "../../COMPONENTS/Video";
// import Video from '../COMPONENTS/Video'
import Footer from "../../COMPONENTS/Footer";
import Explore from "./Explore";
// import ScrollUp from "../../COMPONENTS/ScrollUp";
import ProjectNav from "./ProjectNav";
import React, { useState } from "react";
import projectsBg from "../../IMAGES/ProjectsBackground.png";
// import projectsVideo from "../VIDEOS/Projects-Background.mp4";
import Masonry from "react-masonry-css";
import { UIs, PROJECTS } from "../Utils";
import MainProject from "./MainProject";
import UIProjects from "./UIProjects";
import ReactVisibilitySensor from "react-visibility-sensor";
import ErrorHandler from "../../COMPONENTS/ErrorHandler";
import { Toaster } from "react-hot-toast";
const Projects = () => {
  const [nav, setNav] = useState("All");
  const breakPoints = {
    default: 3,
    950: 2,
    500: 1,
  };
  const breakPoints2 = {
    default: 3,
    950: 2,
    500: 1,
  };

  //SET PROJECTS BASED ON NAVIGATION
  const NewProjects = PROJECTS.filter((pro) => {
    return pro?.tag?.includes(nav);
  });
  return (
    <div id="projects">
      <div className="bg" children={<Explore />} />
      <ReactVisibilitySensor
        resizeCheck={true}
        delayedCall={true}
        scrollCheck={true}
        scrollDelay={150}
        partialVisibility={true}
        minTopValue={200}
      >
        <main>
          <Toaster position="bottom-left" reverseOrder={true} />
          <ProjectNav nav={nav} setNav={setNav} />
          <section
            className={NewProjects.length === 0 ? "flex justify-center" : ""}
          >
            {NewProjects.length === 0 ? (
              <span className="my-[30vh] px-18 w-fit text-xs font-italic text-gray-400 opacity-50">
                There is no project here ! 😁
              </span>
            ) : nav !== "UI/UX" ? (
              <Masonry
                breakpointCols={breakPoints2}
                className="gridSection"
                columnClassName="gridSectionCol"
              >
                {NewProjects.map((project) => {
                  return (
                    <ErrorHandler key={project.id}>
                      <MainProject
                        // anime={anime}
                        nav={nav}
                        project={project}
                      />
                    </ErrorHandler>
                  );
                })}
              </Masonry>
            ) : (
              <Masonry
                breakpointCols={breakPoints}
                className="UI-UX"
                columnClassName="UI_image"
              >
                {UIs?.map((img, i) => {
                  return (
                    <ErrorHandler key={i}>
                      <UIProjects img={img} nav={nav} i={i} />
                    </ErrorHandler>
                  );
                })}
              </Masonry>
            )}
          </section>
        </main>
      </ReactVisibilitySensor>
    </div>
  );
};

export default Projects;
