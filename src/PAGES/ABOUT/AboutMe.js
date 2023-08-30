import React from "react";
// import {Tada} from "react-reveal/Tada";
import { withRouter } from "react-router-dom";

const AboutMe = withRouter(({ anime, history }) => {
  return (
    <div className="aboutMe">
      {/* <Tada when={anime} delay={450}> */}
      <p>
        I focus more on building innovative digital products for varieties of
        clients whilst providing an accessible interface polished for better
        performance and user experience. I use design tools like Figma,
        Nicepage, Canva, Adobe XD & photoshop to create delightful and
        responsive website layouts in order to create well-structured code that
        scales well during build automation and product growth. Rather than
        coding all day I like to play chess, basketball, go swimming, listen to
        music, play video games, or watch a movie. Other times I'm either djing,
        reading or learning a new language, framework or development tool.
        Although I've made some side projects you can find {""}
        <span
          onClick={() => {
            history.push("/projects");
          }}
        >
          here
        </span>
        , my portfolio has no ads nor sponsored content so if any of my
        content/designs have helped you, consider supporting me through my
        donate section.
      </p>
      {/* </Tada> */}
    </div>
  );
});

export default AboutMe;
