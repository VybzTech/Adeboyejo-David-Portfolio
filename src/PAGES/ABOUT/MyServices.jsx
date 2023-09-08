import { SERVICES } from "../Utils";
import { Params } from "../Utils";
import Particles from "react-tsparticles";
import { Fade, Zoom } from "react-awesome-reveal";
import ServiceCard from "./ServiceCard";
import Masonry from "react-masonry-css";
import React, { useState, useEffect } from "react";

function MyServices() {
  const breakPoints = {
    default: 3,
    800: 2,
    450: 1,
  };

  return (
    <div className="myServices">
      <Fade big triggerOnce>
        <Particles params={Params} />
      </Fade>
      <div className="serviceWrapper">
        <Zoom big duration={750} cascade={true} triggerOnce>
          <h2>my services</h2>
        </Zoom>
        <Masonry
          breakpointCols={breakPoints}
          className="serviceList"
          columnClassName="serviceListCol"
        >
          {SERVICES?.map((service) => {
            return (
              <Zoom key={service.name} big triggerOnce>
                <ServiceCard service={service} />
              </Zoom>
            );
          })}
        </Masonry>
      </div>
    </div>
  );
}

export default MyServices;
