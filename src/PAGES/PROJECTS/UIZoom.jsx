import React from "react";
import ReactDOM from "react-dom";
import { Fade, Zoom } from "react-awesome-reveal";
const UIZoom = ({ set, img }) =>
  ReactDOM.createPortal(
    <Zoom big delay={100}>
      <div className="UIZoom">
        <Fade big duration={350} delay={700} className="zoomd">
          <img src={img} alt={`My ${img}`} />
        </Fade>
        <button
          title="Close"
          onClick={() => {
            set((p) => !p);
          }}
        >
          <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </button>
      </div>
    </Zoom>,
    document.getElementById("portals")
  );

export default UIZoom;
