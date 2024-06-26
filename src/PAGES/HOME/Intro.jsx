import Typo from "./Typo";
import Resume from "../../COMPONENTS/Resume";
import { Slide } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";

const Intro = () => {
  const [showCV, setShowCV] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
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
  }, [showCV]);
  return (
    <>
      <div className="intro">
        <Slide triggerOnce delay={200} left>
          <Slide
            delay={7000}
            direction="down"
            duration={250}
            triggerOnce
            reverse
          >
            <p className="hero ">Hello I'm</p>
          </Slide>
          <h1>Adeboyejo David</h1>
          <Typo />
          <button
            onClick={() => {
              setShowCV((cv) => !cv);
              setTimeout(() => {
                document.documentElement.scrollTop = 0;
              }, 450);
            }}
            className="btn"
            variant="outlined"
          >
            download cv
          </button>
          <Resume showCV={showCV} setShowCV={setShowCV} />
        </Slide>
      </div>
    </>
  );
};

export default Intro;
