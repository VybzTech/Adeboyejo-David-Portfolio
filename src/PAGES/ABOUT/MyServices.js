import { SERVICES } from "../Utils";
import { Zoom } from "react-awesome-reveal";
import ServiceCard from "../MODALS/ServiceCard";
import Masonry from "react-masonry-css";
import React, { useState, useEffect } from "react";

function MyServices() {
  const [anime, setAnime] = useState(false);

  const breakPoints = {
    default: 3,
    800: 2,
    450: 1,
  };

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

    observer.observe(document?.querySelector(".myServices"));
  }, []);

  return (
    <div className="myServices">
      <Zoom big duration={750} cascade={true} when={anime}>
        <h2>my services</h2>
      </Zoom>
      <Masonry
        breakpointCols={breakPoints}
        className="serviceList"
        columnClassName="serviceListCol"
      >
        {SERVICES?.map((service) => {
          return (
            <Zoom key={service.name} big when={anime}>
              <ServiceCard service={service} />
            </Zoom>
          );
        })}
      </Masonry>
    </div>
  );
}

export default MyServices;
