import React, { useState, useEffect } from "react";
import Footer from "../../COMPONENTS/Footer";
import ImageMe from "./ImageMe";
import AboutMe from "./AboutMe";
import Resume from "../../COMPONENTS/Resume";
import MyServices from "./MyServices";
import ScrollUp from "../../COMPONENTS/ScrollUp";
import { Fade, Zoom } from "react-awesome-reveal";
// import RubberBand from 'react-reveal/RubberBand'

const About = () => {
  const [anime, setAnime] = useState(false);
  const [showCV, setShowCV] = useState(false);
  const [top, setTop] = useState(false);

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

    // observer.observe(document?.querySelector("section"));

    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop === 0) {
        setTop((t) => !t);
      } else {
        setTop(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return (
    <div id="about">
      <div className="bg">
        <Zoom triggerOnce big duration={750} delay={1200}>
          <h1>about me</h1>
        </Zoom>
        <blockquote className="content">
          <Fade triggerOnce cascade big duration={750} delay={1500}>
            <p>
              Dear Reader, I extend my warm greetings to you. My name is
              Adeboyejo David, and I am an engineer known for my unwavering
              commitment, production of high-quality work and my enthusiasm for
              scalable solutions. My journey into the world of website
              development began in early 2020, when I participated in a
              transformative training program that completely reshaped my
              perception of the dynamic tech industry.
            </p>
            <p>
              As a skilled developer, I can create fully functional React
              websites using HTML, CSS, JavaScript, TypeScript, and SCSS. I'm
              experienced in integrating tools like Bootstrap, JQuery, Super
              CSS, and Tailwind CSS to create amazing user interfaces.
              Currently, I'm focused on working with the Asp .NET Core Framework
              and using C# for database manipulation.I also have a solid
              foundation in back-end development, particularly using Backend as
              a Service (BAAS) solutions like Firebase.
            </p>
            <p>
              I am a graduate of Lagos State University (LASU), where I majored
              in Electronic & Computer Engineering. Additionally, I have
              obtained certification as a React developer, showcasing my
              expertise in the field. My genuine eagerness lies in applying my
              skills to enhance software development initiatives for employers
              or tech startups. Together, let us collaborate to build advanced
              and innovative solutions that meet your unique needs!
            </p>
          </Fade>
        </blockquote>
        <div 
            className="w-fit mx-auto my-3"
            >
          <button
            className="btn"
            onClick={() => {
              setShowCV((cv) => !cv);
              setTimeout(() => {
                document.documentElement.scrollTop = 0;
              }, 450);
            }}
          >
            download cv
          </button>
        </div>
      </div>
      {/* <ScrollUp /> */}
      {/* <Resume showCV={showCV} setShowCV={setShowCV} /> */}
      <section>
        <Zoom>
          <ImageMe />
        </Zoom>
        <AboutMe />
      </section>
      <MyServices />
      <Footer />
    </div>
  );
};

export default About;
