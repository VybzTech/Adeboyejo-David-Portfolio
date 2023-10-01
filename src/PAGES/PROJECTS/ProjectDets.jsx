import React from "react";
import { Zoom } from "react-awesome-reveal";
import ReactDOM from "react-dom";
import Github from "../../ICONS/Github";
import ArrowRight from "../../ICONS/ArrowRight";
import Link from "../../ICONS/PROJECTS/Link";
import Tools from "../../ICONS/PROJECTS/Tools";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Close from "../../ICONS/Close";
const ProjectDets = ({ project, showDetails, setShowDetails }) => {
  const {
    name,
    content,
    utilities,
    images,
    git,
    link,
    position,
    updated,
    timeline,
  } = project;
  console.log(project);
  if (showDetails) {
    return ReactDOM.createPortal(
      <Zoom className="ProjectDets" triggerOnce big delay={1000}>
        <>
          <button
            onClick={() => {
              setShowDetails((d) => (d = !d));
            }}
          >
            <Close />
            close
          </button>
          <h3>{name}</h3>
          <div className="images">
            {/*   PROJECT IMAGES SWIPER */}
            <Swiper
              modules={[Navigation]}
              slidesPerView={1}
              spaceBetween={0}
              speed={500}
              navigation
              effect={"fade"}
              loop={true}
              grabCursor={true}
            >
              <div className="swiper-wrapper">
                {images?.map((Img, id) => (
                  <SwiperSlide key={id} className="swiper-slide">
                    <img src={Img} alt={`${name}-${id}`} />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            <p>
              Updated {updated} days ago {position} Position
            </p>
            <span>{timeline} completion.</span>
            {/* hr */}
          </div>
          <hr />
          <p className="content">{content}</p>
          <div className="milestone pl-2">
            <h4>Milestones:</h4>
            <li>Some milestone</li>
            <li>other milestone</li>
          </div>
          <hr />
          <div className="tools pl-2">
            {utilities?.map(({ name, img }) => {
              return (
                <div key={name}>
                  <li>
                    <img src={img} alt={name} />
                  </li>
                  <div className="">
                    <p>HTML</p>
                    <p>
                      Using the markup lang. to edit the DOM and apply styling.
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="actions">
            <div>
              <button
                onClick={() => {
                  window.open(git, "_blank");
                }}
              >
                <Github />
              </button>
              <button
                onClick={() => {
                  window.open(link, "_blank");
                }}
              >
                <Link />
              </button>
            </div>
          </div>
          <p>kjisub kvvjskjvsvsjkvbfsvjubjfvbfsjvbfudvbfoujbrjvrvbsurjvbs</p>
        </>
      </Zoom>,
      document.getElementById("portals")
    );
  }
  return "";
};

export default ProjectDets;
