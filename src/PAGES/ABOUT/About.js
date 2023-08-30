import React, { useState, useEffect } from "react";
import Footer from "../../COMPONENTS/Footer";
import ImageMe from "./ImageMe";
import AboutMe from "./AboutMe";
import Resume from "../../COMPONENTS/Resume";
import MyServices from "./MyServices";
import ScrollUp from "../../COMPONENTS/ScrollUp";
import { Fade, Zoom } from "react-awesome-reveal";
// import RubberBand from 'react-reveal/RubberBand'

const About = () => {
  const [anime, setAnime] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    var observer = new IntersectionObserver(onIntersection, {
      root: null,
      threshold: 0.5,
    });

    function onIntersection(entries) {
      entries.forEach(() => {
        window.addEventListener("scroll", () => {
          if (window.scrollY >= 30) {
            setAnime(true);
          }
        });
      });
    }

    observer.observe(document?.querySelector("section"));

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop === 0) {
        setTop((t) => !t);
      } else {
        setTop(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div id="about">
      <div className="bg">
        <Zoom big duration={750} delay={1200} cascade={true}>
          <h1>about me</h1>
        </Zoom>
        <div className="content">
          <Fade big duration={750} delay={1200}>
            <p>
              Hello, my name is Adeboyejo David and i'm a young, enthusiatic &
              hardworking engineer. My interest in website development started
              in 2021 after a training programme I'd say, changed my perspective
              of the technical world. Based on some programming languages like
              HTML, CSS & Javascript I could orchestrate a functional website
              and integrate web tools like Bootstrap, Jquery and Super CSS to
              achieve an amazing interface and user experience. Although my
              current focus is on React JS, I have some basic knowledge in
              back-end development using Php, Node JS or Firebase. I am a
              graduate of Lagos State University LASU, majored in Electronics
              and Computer Engineering and a certified member of the NSE. you
              can click the button below to read more about me or download my
              resume.
            </p>
          </Fade>
          {/* <RubberBand spy={top}> */}
          <button
            onClick={() => {
              setShowCV((cv) => !cv);
              setTimeout(() => {
                document.documentElement.scrollTop = 0;
              }, 450);
            }}
          >
            download cv
          </button>
          {/* </RubberBand> */}
        </div>
      </div>
      <ScrollUp />
      <Resume showCV={showCV} setShowCV={setShowCV} />
      <section>
        <Zoom when={anime}>
          <ImageMe />
        </Zoom>
        <AboutMe anime={anime} />
      </section>
      <MyServices />
      <Footer />
    </div>
  );
};

export default About;
