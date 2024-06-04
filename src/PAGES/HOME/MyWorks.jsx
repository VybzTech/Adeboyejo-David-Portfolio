import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import { projectSlides } from "../Utils";
import Swiper from "swiper";

const MyWorks = () => {
  const [anime, setAnime] = useState(false);
  const navigate = useNavigate();

  var swiper = new Swiper(".swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    speed: 300,
    // slidesPerView: 3,
    // spaceBetween: 20,
    // cardsEffect: {
    //   slideShadows: true,
    // },
    initialSlide: 0,
    // coverflow: {
    //   rotate: 50,
    //   stretch: 300,
    //   depth: 500,
    //   modifier: 1,
    //   slideShadows: true,
    // },
  
    // loop: true,
    // speed: 1000,
    autoplay: {
      delay: 1000,
    },
    // effect: 'coverflow',
    // grabCursor: true,
    // centeredSlides: true,
    // slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 30,
      stretch: 500,
      depth: 700,
      slideShadows: true,
    },
  
    preloadImages: true,
    updateOnWindowResize: true,
    breakpoints: {
      1300: { slidesPerView: 4.2, spaceBetween: 17 },
      1024: { slidesPerView: 3.3, spaceBetween: 15 },
      770: { slidesPerView: 2.2, spaceBetween: 20 },
      425: { slidesPerView: 1.8, spaceBetween: 18 },
      320: {
        slidesPerView: 1.6,
        spaceBetween: 13,
      },
    },
  });

  return (
    <ReactVisibilitySensor
      resizeCheck={true}
      delayedCall={true}
      scrollCheck={true}
      active={!anime}
      scrollDelay={150}
      partialVisibility={true}
      minTopValue={200}
      onChange={(isVisible) => setAnime(isVisible)}
    >
      <div className="homeProjects">
        <Fade big triggerOnce>
          <div className="hero">
            <h3>case study</h3>
            <h1 className="headings">latest works</h1>
          </div>
        </Fade>
        <Slide
          bottom
          triggerOnce
          onDoubleClick={() => {
            navigate("/Projects");
            document.documentElement.scrollTop = 0;
          }}
        >
          <div className="swiper">
            <div className="swiper-wrapper">
              {projectSlides?.map((slide) => (
                <div key={slide.alt} className="swiper-slide">
                  <img src={slide.src} alt={slide.alt} />
                </div>
              ))}
            </div>
          </div>
        </Slide>
      </div>
    </ReactVisibilitySensor>
  );
};

export default MyWorks;
