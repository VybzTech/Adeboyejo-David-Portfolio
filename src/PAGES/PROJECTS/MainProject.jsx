import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import Github from "../../ICONS/Github";
import ArrowRight from "../../ICONS/ArrowRight";
import Link from "../../ICONS/PROJECTS/Link";
import Tools from "../../ICONS/PROJECTS/Tools";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
 
const MainProject = ({ nav, project }) => {
  const { name, content, utilities, images, git, link } = project;

  const [show, set] = useState(false);
  const [details, setDetails] = useState(false);
  // var swiper = new Swiper(".swiper", {
  // autoHeight: true,
  // autoplay: { delay: 1500 },
  // centeredSlides: true,
  // effect: "fade",
  // fadeEffect: {
  //   crossFade: true,
  // },
  // grabCursor: true,
  // initialSlide: 0,
  // loop: true,
  // modules: [Navigation],
  // slidesPerView: 1,
  // spaceBetween: 0,
  // speed: 500,
  // // navigation: {
  // //   nextEl: ".swiper-button-next",
  // //   prevEl: ".swiper-button-prev",
  // // },
  // });

  return (
    <>
      <Zoom
        key={project.id}
        big
        triggerOnce
        left
        delay={1500}
        className="MainProject"
      >
        <>
          {/*   PROJECT IMAGES SWIPER */}
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={0}
            speed={500}
            navigation
            effect={"fade"}
            // fadeEffect={{ crossFade: true }}
            loop={true}
            // autoplay={true}
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
          {/*   PROJECT CONTENTS */}
          <div className="contentWrapper">
            <h4>{name}</h4>
            <p>
              {content.length > 120 ? content.substr(0, 100) + "..." : content}
            </p>
            <div className="actions">
              <div>
                <button
                  className={`${show && "active"}`}
                  onClick={() => set((s) => (s = !s))}
                >
                  <Tools />
                </button>
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
              <div className="more">
                <button onClick={() => setDetails((d) => (d = !d))}>
                  <ArrowRight />
                </button>
              </div>
              {/* https://www.figma.com/file/NNPdiNOfJKjTqvE7apPNHw/David's-Portfolio?type=design&node-id=220-633&mode=design */}
            </div>
          </div>
        </>
      </Zoom>
          {/*   PROJECT TOOLS */}
      <Zoom big cascade triggerOnce delay={500}>
        <ul className={`tools ${show && "show"}`}>
          {utilities?.map(({ name, img }) => {
            return (
              <li key={name}>
                <img src={img} alt={name} />
              </li>
            );
          })}
        </ul>
      </Zoom>
    </>
  );
};

export default MainProject;
