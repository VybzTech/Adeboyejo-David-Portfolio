import Video from "../../COMPONENTS/Video";
// import Video from '../COMPONENTS/Video'
import Footer from "../../COMPONENTS/Footer";
import Explore from "./Explore";
import ScrollUp from "../../COMPONENTS/ScrollUp";
import ProjectNav from "./ProjectNav";
import React, { useState } from "react";
import projectsBg from "../../IMAGES/ProjectsBackground.png";
// import projectsVideo from "../VIDEOS/Projects-Background.mp4";
import Masonry from "react-masonry-css";
import { UIs, PROJECTS } from "../Utils";
import MainProjects from "./MainProjects";
import UIProjects from "./UIProjects";
import ReactVisibilitySensor from "react-visibility-sensor";
import ErrorHandler from "../../COMPONENTS/ErrorHandler";

const Projects = () => {
  const [anime, setAnime] = useState(false);
  const [nav, setNav] = useState("All");
  // const [previewUI, setPreviewUI] =
  // useState(false)
  const breakPoints = {
    default: 3,
    800: 2,
    450: 1,
  };
  //SET PROJECTS BASED ON NAVIGATION
  const NewProjects = PROJECTS.filter((pro) => {
    return pro?.tag?.includes(nav);
  });

  // useEffect(() => {
  // 	var observer = new IntersectionObserver(
  // 		onIntersection,
  // 		{
  // 			root: null,
  // 			threshold: 0.5,
  // 		}
  // 	)

  // 	function onIntersection(entries) {
  // 		entries.forEach(() => {
  // 			window.addEventListener('scroll', () => {
  // 				if (window.scrollY >= 30) {
  // 					setAnime(true)
  // 				}
  // 			})
  // 		})
  // 	}
  // 	observer.observe(
  // 		document?.querySelector('main')
  // 	)
  // }, [nav])

  return (
    <div id="projects">
      <div className="bg" children={<Explore />
      } />
      {/* <ScrollUp /> */}
      <ReactVisibilitySensor
        resizeCheck={true}
        delayedCall={true}
        scrollCheck={true}
        scrollDelay={150}
        partialVisibility={true}
        minTopValue={200}
        onChange={(isVisible) => setAnime(isVisible)}
        active={!anime}
      >
        <main>
          <ProjectNav anime={anime} nav={nav} setNav={setNav} />
          {/* <section>
            {nav === "UI/UX" ? (
              <Masonry
                breakpointCols={breakPoints}
                className="UI-UX"
                columnClassName="UI_image"
              >
                {UIs?.map((img, i) => {
                  return (
                    <ErrorHandler key={i}>
                      <UIProjects
                        img={img}
                        anime={anime}
                        nav={nav}
                        i={i}
                        // prev={previewUI}
                        // set={setPreviewUI}
                      />
                    </ErrorHandler>
                  );
                })}
              </Masonry>
            ) : (
              <div className="gridSection">
                {NewProjects.map((project) => {
                  return (
                    <ErrorHandler>
                      <MainProjects
                        key={project.id}
                        project={project}
                        anime={anime}
                        nav={nav}
                      />
                    </ErrorHandler>
                  );
                })}
              </div>
            )}
          </section> */}
        </main>
      </ReactVisibilitySensor>
      <Footer />
    </div>
  );
};

export default Projects;
