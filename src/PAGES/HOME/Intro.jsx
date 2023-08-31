import Typo from "./Typo";
import Resume from "../../COMPONENTS/Resume";
import { Zoom } from "react-awesome-reveal";
// import { Button } from '@material-ui/core'
import React, { useState, useEffect } from "react";
// import { animated, useSpring } from 'react-spring'

const Intro = () => {
  const [showCV, setShowCV] = useState(false);
  const [top, setTop] = useState(false);

  // const hero = useSpring({
  // 	config: {
  // 		velocity: 5,
  // 		tension: 300,
  // 		duration: 500,
  // 	},
  // 	delay: 6000,
  // 	from: {
  // 		opacity: 1,
  // 		transform: 'translateY(0%) scale(1)',
  // 	},
  // 	to: {
  // 		opacity: 0,
  // 		transform: 'translateY(100%) scale(0.85)',
  // 	},
  // })

  // const body = document.getElementById("light");

  useEffect(() => {
    // showCV
    // 	? (body.children.home.style.display =
    // 			"none")
    // 	: (body.children.home.style.display =
    // 			"block");

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
  // body.children.home
  return (
    <div className="intro">
      <>
        {/* I am Intro */}
        <p className="hero ">Hello I'm</p>
        {/* <Zoom delay={1200}> */}
        {/* <animated.div
						className='hero'
						style={hero}
					>
        Hello I'm
					</animated.div> */}
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
          disableElevation={false}
        >
          download cv
        </button>
        {/* <Pulse delay={500} appear spy={top} duration={750}>
          </Pulse> */}
        {/* </Zoom> */}
        {/* <Resume showCV={showCV} setShowCV={setShowCV} /> */}
      </>
    </div>
  );
};

export default Intro;
