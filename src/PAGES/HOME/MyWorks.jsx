import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { withRouter } from "react-router-dom";
// import Netflex from '../../IMAGES/NetFlex-Project.png'
// import SammieArt from '../../IMAGES/SammieArt-Project.png'
// import DivisionForm from '../../IMAGES/DivisionForm-Project.png'
// import TaskManager1 from '../../IMAGES/TaskManager1-Project.png'
// import TaskManager2 from '../../IMAGES/TaskManager2-Project.png'
import ReactVisibilitySensor from "react-visibility-sensor";
// import Swiper from "swiper";
//c:/Users/DHARVO/Desktop/PROGRAMMING/PROGRAMS/REACT/portfolio/node_modules/swiper/react/
// import {
// 	Swiper,
// 	// SwiperSlide,
// } from 'swiper/react/swiper-react'
// import {
// 	EffectCoverflow,
// 	Mousewheel,
// 	Autoplay,
// 	EffectCards,
// } from 'swiper'
// import "swiper/swiper.min.css";
// import "node_modules/swiper/swiper-bundle.min.css"
// import "swiper/swiper-bundle.min.css"
// import "swiper/swiper-bundle.css";
import "swiper/css";
import { projectSlides } from "../Utils";
import Swiper from "swiper";
// import NetflexProject from '../../IMAGES/NetFlex-Project.png'

const MyWorks = withRouter(({ history }) => {
  const [anime, setAnime] = useState(false);
  // const bgStyles = {
  // 	width: '100%',
  // 	objectFit: 'contain',
  // 	objectPosition: 'center',
  // 	backgroundRepeat: 'no-repeat',
  // 	backgroundSize: 'cover',
  // 	backgroundAttachment: 'fixed',
  // 	// height: 100vh,
  // }
  //

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

    // preloadImages: true,
    // autoHeight: true,
    // updateOnImagesReady: true,
    // updateOnWindowResize: true,
    breakpoints: {
      // 	//when window width >=1440px
      // 	1440: {
      // 		// slidesPerView: 1,
      // 		// spaceBetween: 10,
      // 	},
      1300: { slidesPerView: 4.5, spaceBetween: 25 },
      1024: { slidesPerView: 3, spaceBetween: 22 },
      770: { slidesPerView: 2.2, spaceBetween: 20 },
      425: { slidesPerView: 1.8, spaceBetween: 18 },
      // 	375: {},
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
            <h1>latest works</h1>
          </div>
        </Fade>
        <Slide bottom triggerOnce onDoubleClick={() => {
              history.push("/Projects");
              document.documentElement.scrollTop = 0;
            }}>
          <div
            className="swiper"
            
          >
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
});

export default MyWorks;
