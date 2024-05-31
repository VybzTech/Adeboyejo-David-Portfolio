import React from "react";
import { Zoom } from "react-awesome-reveal";
import ReactDOM from "react-dom";
import Github from "../../ICONS/Github";
import Link from "../../ICONS/PROJECTS/Link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Close from "../../ICONS/Close";
import ViewFinder from "../../ICONS/ViewFinder";
import Copy from "../../ICONS/Copy";
import { useState } from "react";
import toast from "react-hot-toast";

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
    milestones,
  } = project;
  const [copied, setCopy] = useState(false);
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
            <p className="flex items-center">
              Updated {updated} ago <ViewFinder />
              {position} Position
            </p>
            <span>{timeline} completion.</span>
            {/* hr */}
          </div>
          <hr />
          <p className="content">{content}</p>
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
              <button
                onClick={() => {
                  const textToCopy = link;
                  if (navigator.clipboard) {
                    navigator.clipboard
                      .writeText(textToCopy)
                      .then(() => {
                        setCopy(true);
                        toast.success("Copied project link");
                        setTimeout(() => {
                          setCopy(false);
                        }, 2000);
                      })
                      .catch((err) => {
                        toast.error("Couldn't copy link");
                        console.error("Unable to copy text: ", err);
                      });
                  } else {
                    // Fallback for browsers that do not support Clipboard API
                    const inputElement = document.createElement("input");
                    inputElement.value = textToCopy;
                    document.body.appendChild(inputElement);
                    inputElement.select();
                    document.execCommand("copy");
                    document.body.removeChild(inputElement);
                    toast.success("Copied project link");
                  }
                }}
              >
                <Copy copied={copied} />
              </button>
            </div>
          </div>
          <hr />
          <div className="milestone pl-2">
            <h4>Milestones :</h4>
            {milestones?.length === 0
              ? "There are no Milestones"
              : milestones?.map((stone, id) => <li key={id}>{stone}</li>)}
          </div>
          <hr />
          <div className="tools pl-2">
            {utilities?.map(({ name, img, aid }) => {
              return (
                <div key={name}>
                  <li>
                    <img src={img} alt={name} />
                  </li>
                  <div className="">
                    <p>{name}</p>
                    <p>{aid.length > 120 ? aid.substr(0, 100) + "..." : aid}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            style={{ padding: "0.65rem 1rem", color: "#fa4160" }}
            className="w-full hover:bg-stone-100 rounded-md"
            onClick={() => {
              setShowDetails((d) => (d = !d));
            }}
          >
            {`Close "${name}" Project`}
            <Close />
          </button>
        </>
      </Zoom>,
      document.getElementById("portals")
    );
  }
  return "";
};

export default ProjectDets;
