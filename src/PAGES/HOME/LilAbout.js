import CircleImg from "./CircleImg";
import LilAboutMe from "./LilAboutMe";
import React, { useState, useRef } from "react";
import { Zoom, Slide } from "react-awesome-reveal";
import ReactVisibilitySensor from "react-visibility-sensor";

const LilAbout = () => {
  const [anime, setAnime] = useState(false);
  const Elem = useRef(null);
  return (
    <ReactVisibilitySensor
      resizeCheck={true}
      delayedCall={true}
      scrollCheck={true}
      scrollDelay={150}
      partialVisibility={true}
      minTopValue={200}
      onChange={(isVisible) => setAnime(isVisible)}
      active={!anime}
    >
      <div className="lilAbout" ref={Elem}>
        <Zoom big when={anime}>
          <CircleImg />
        </Zoom>
        <Slide when={anime} right>
          <LilAboutMe />
        </Slide>
      </div>
    </ReactVisibilitySensor>
  );
};

export default LilAbout;
