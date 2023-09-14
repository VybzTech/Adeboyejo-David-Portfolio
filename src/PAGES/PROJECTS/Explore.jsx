import React from "react";
import { Fade, Zoom } from "react-awesome-reveal";

function Explore() {
  return (
    <div className="explore">
      <Zoom triggerOnce big delay={1200}>
        <h1>explore my projects</h1>
      </Zoom>
      <Fade bottom big delay={1500}>
        <p className="sub">
          "Debugging is twice as hard as writing the code in the first place.
          Therefore, if you write the code as cleverly as possible; You are by
          definition, not smart enough to debug it "<br />- Brian W. Kernighan.
        </p>
      </Fade>
    </div>
  );
}

export default Explore;
