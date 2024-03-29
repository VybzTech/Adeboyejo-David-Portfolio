import React, { useState } from "react";
import { Zoom } from "react-awesome-reveal";
import UIZoom from "./UIZoom";
import { UIs } from "../Utils";

const UIProjects = ({ nav, anime, img, i }) => {
  const [prev, set] = useState(false);

  if (prev && img === UIs[i]) {
    return (
      <>
        <Zoom triggerOnce big delay={1700}>
          <img
            onClick={() => {
              set((p) => !p);
            }}
            src={img}
            alt={`Different UI images-${img}`}
          />
        </Zoom>
        <UIZoom p={prev} set={set} img={img} />
      </>
    );
  } else {
    return (
      <>
        <Zoom triggerOnce big delay={1700}>
          <img
            onClick={() => {
              set((p) => !p);
            }}
            src={img}
            alt={`Different UI images-${img}`}
          />
        </Zoom>
      </>
    );
  }
};

export default UIProjects;
