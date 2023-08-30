import React from "react";
// import { Button } from '@material-ui/core'
import { withRouter } from "react-router-dom";

const LilAboutMe = withRouter(({ history }) => {
  return (
    <div className="about">
      <div className="hero">
        <h2>
          Who am i ?
          <div className="line">
            <div />
          </div>
        </h2>
      </div>
      <p>
        Hello, my name is Adeboyejo David and i'm a young, enthusiatic &
        hardworking engineer. My interest in website development started in 2021
        after a training programme I'd say, changed my perspective of the
        technical world. After studying some programming languages like HTML,
        CSS & Javascript I could orchestrate a functional website and integrate
        web tools to meet specified requirements and achieve an amazing
        interface for the best user experience. Although my current focus is on
        React JS & Flutter, I have some basic knowledge in back-end development
        using PHP, Node JS or Firebase.
      </p>
      <button
        onClick={() => {
          history.push("/About");
        }}
      >
        LEARN MORE
      </button>
    </div>
  );
});
export default LilAboutMe;
