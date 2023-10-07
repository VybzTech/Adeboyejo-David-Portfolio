import React from "react";
import mouse from "../../IMAGES/Mouse.svg";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

function Explore() {
  return (
    <div className="explore">
      <Zoom triggerOnce big delay={1200}>
        <h1>explore my projects</h1>
      </Zoom>
      <Fade bottom triggerOnce delay={1300}>
        <p className="sub">
          "Debugging is twice as hard as writing the code in the first place.
          Therefore, if you write the code as cleverly as possible; You are by
          definition, the only person smart enough to debug it "<br />- Brian W.
          Kernighan.
        </p>
      </Fade>
      <Fade triggerOnce delay={1400}>
        <img src={mouse} alt="mouse" />
      </Fade>
    </div>
  );
  // left right up down
}

export default Explore;
