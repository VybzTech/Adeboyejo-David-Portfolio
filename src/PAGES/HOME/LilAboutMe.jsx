import React from "react";
// import { Button } from '@material-ui/core'
import { withRouter } from "react-router-dom";

const LilAboutMe = withRouter(({ history }) => {
  return (
    <div className="about">
      <div className="hero">
        <h2>
          Who i am
          <div className="line rounded">
            <div />
          </div>
        </h2>
      </div>
      <p>
        Hi there! I'm Adeboyejo David, a young and enthusiastic engineer. My
        journey into website development began in 2020 when I participated in an
        intern program. Since then, I've become passionate about developing
        websites. Additionally, I have experience as a software developer,
        specializing in React JavaScript and object-oriented programming.
        Recently, I've also started working with C# in the ASP.NET framework for
        backend services. I'm excited to apply my skills to enhance software
        development projects and collaborate on innovative solutions.
      </p>
      <button
        className="uppercase btn"
        onClick={() => {
          history.push("/About");
        }}
      >
        learn more
      </button>
    </div>
  );
});
export default LilAboutMe;
