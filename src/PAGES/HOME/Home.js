import React from "react";
import Intro from "./Intro";
import Skills from "./Skills";
import MyWorks from "./MyWorks";
import LilAbout from "./LilAbout";
import ErrorHandler from "../../COMPONENTS/ErrorHandler";
import img from "../../IMAGES/Home-Design.gif";

const Home = () => {
  return (
    <div id="home">
      <ErrorHandler>
        <img className="bg" src={img} alt="HomeBg" />
        <Intro />
        <ErrorHandler>
          <LilAbout />
        </ErrorHandler>
        <ErrorHandler>
          <Skills />
        </ErrorHandler>
        <ErrorHandler>
          <MyWorks />
        </ErrorHandler>
      </ErrorHandler>
    </div>
  );
};

export default Home;
