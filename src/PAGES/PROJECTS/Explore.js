import React from "react";
import { Fade } from "react-awesome-reveal";
// import RubberBand from "react-reveal/RubberBand";

function Explore() {
  return (
    <div className="explore">
      {/* <RubberBand delay={1100}> */}
      <h1>explore my projects</h1>
      {/* </RubberBand> */}
      <Fade bottom big delay={1500}>
        <p className="sub">
          "Debugging is twice as hard as writing the code in the first place.
          Therefore, if you write the code as cleverly as possible; You are by
          definition, not smart enough to debug it "
          <span>- Brian W. Kernighan.</span>
        </p>
      </Fade>
    </div>
  );
}

export default Explore;
