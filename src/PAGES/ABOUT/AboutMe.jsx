import React from "react";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <Fade left delay={450} triggerOnce big>
        <p>
          I focus more on building innovative digital products optimized for
          varieties of clients whilst providing an accessible interface polished
          for the best performance and familarity in user experience😀 I use
          design tools like{" "}
          <a
            href="https://www.figma.com/files/team/1014521754602506976"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Figma
          </a>
          ,{" "}
          <a
            href="https://www.canva.com/website-builder/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Canva
          </a>
          ,{" "}
          <a
            href="https://www.Read.Cv/VybzTech/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Read.Cv
          </a>{" "}
          &
          <a
            href="https://adobexdplatform.com/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Adobe XD
          </a>{" "}
          to create delightful and responsive website layouts in order to create
          well-structured code that scales well during build automation and
          deployment.
        </p>
        <p>
          Rather than 💻 coding all day I like to play chess, basketball, go
          swimming, listen to music, play video games, or watch a movie. Other
          times I'm either djing, reading or learning a new language, framework
          or development tool.
        </p>
      </Fade>
    </div>
  );
};

export default AboutMe;
