import React, { useState, useEffect } from "react";
import Footer from "../../COMPONENTS/Footer";
import ImageMe from "./ImageMe";
import AboutMe from "./AboutMe";
import Intro from "./Intro";
import Resume from "../../COMPONENTS/Resume";
import MyServices from "./MyServices";
import ScrollUp from "../../del/ScrollUp";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import Download from "../../ICONS/Download";
// import RubberBand from 'react-reveal/RubberBand'

const About = () => {
  // const [anime, setAnime] = useState(false);
  const [showCV, setShowCV] = useState(false);
  // const [top, setTop] = useState(false);

  useEffect(() => {
    // var observer = new IntersectionObserver(onIntersection, {
    //   root: null,
    //   threshold: 0.5,
    // });
    // function onIntersection(entries) {
    //   entries.forEach(() => {
    //     window.addEventListener("scroll", () => {
    //       if (window.scrollY >= 30) {
    //         setAnime(true);
    //       }
    //     });
    //   });
    // }
    // // observer.observe(document?.querySelector("section"));
    // window.addEventListener("scroll", () => {
    //   if (document.documentElement.scrollTop === 0) {
    //     setTop((t) => !t);
    //   } else {
    //     setTop(false);
    //   }
    // });
    // return () => {
    //   window.removeEventListener("scroll", () => {});
    // };
  }, []);
  return (
    <div id="about">
      <div className="bg">
        <Zoom triggerOnce big delay={1200}>
          <h1>about me</h1>
        </Zoom>
        <Intro />
        <Zoom className="w-fit mx-auto my-4" bottom triggerOnce delay={1200}>
          <button
            className="btn"
            onClick={() => {
              setShowCV((cv) => !cv);
              setTimeout(() => {
                document.documentElement.scrollTop = 0;
              }, 450);
            }}
          >
            download cv
          </button>
        </Zoom>
      </div>
      {/* <ScrollUp /> */}
      <Resume showCV={showCV} setShowCV={setShowCV} />
      <section>
        <Zoom triggerOnce big delay={500}>
          <ImageMe />
        </Zoom>
        <AboutMe />
      </section>
      <MyServices />
    </div>
  );
};

export default About;
