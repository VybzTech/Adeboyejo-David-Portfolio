import CircleImg from "./CircleImg";
import LilAboutMe from "./LilAboutMe";
import React  from "react";
import { Zoom, Slide } from "react-awesome-reveal";
import ReactVisibilitySensor from "react-visibility-sensor";

const LilAbout = () => {
 
  return (
    <ReactVisibilitySensor
      resizeCheck={true}
      delayedCall={true}
      scrollCheck={false}
      scrollDelay={150}
      partialVisibility={true}
      minTopValue={200}
    >
      <section className="lilAbout">
        <Zoom big triggerOnce>
          <CircleImg />
        </Zoom>
        <Slide right triggerOnce>
          <LilAboutMe />
        </Slide>
      </section>
    </ReactVisibilitySensor>
  );
};

export default LilAbout;
