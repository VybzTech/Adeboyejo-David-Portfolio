import React from "react";
import Intro from "./Intro";
import Video from "../../COMPONENTS/Video";
import Footer from "../../COMPONENTS/Footer";
import Skills from "./Skills";
import MyWorks from "./MyWorks";
import LilAbout from "./LilAbout";
import ScrollUp from "../../COMPONENTS/ScrollUp";
import homeBg from "../../IMAGES/HomeBackground.jpg";
import ErrorHandler from "../../COMPONENTS/ErrorHandler";
import homeVideo from "../../VIDEOS/Home-Background.mp4";
import Loader from "../../COMPONENTS/Loader";

const Home = () => {
  return (
    <div id="home">
      <ErrorHandler>
          <Video vid={homeVideo} img={homeBg} imgName="HomeBg" />
          <Intro /> 
      <ErrorHandler>
        {/* <LilAbout /> */}
      </ErrorHandler>
      <ErrorHandler>
        {/* <Skills /> */}
      </ErrorHandler>
      <ErrorHandler>
        {/* <MyWorks /> */}
      </ErrorHandler>
      
      {/* <ScrollUp />
      */}
      <Footer />
      </ErrorHandler>
    </div>
  );
};

export default Home;
