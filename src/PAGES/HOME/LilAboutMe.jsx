import React from "react";
// import { Button } from '@material-ui/core'
import { withRouter } from "react-router-dom";

const LilAboutMe = withRouter(({ history }) => {
  return (
    <div className="about">
      <div className="hero">
        <h2>
          Who i am
          <div className="line">
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
      <div className="more">
        <button
          className="btn flex"
          onClick={() => {
            history.push("/About");
            document.documentElement.scrollTop = 0;
          }}
        >
          continue reading
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="ml-2 w-4 h-4 animate-pulse mr-[-.2rem]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
});
export default LilAboutMe;
