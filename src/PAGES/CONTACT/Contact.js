import Footer from "../../COMPONENTS/Footer";
import ScrollUp from "../../COMPONENTS/ScrollUp";
import ContactMe from "./ContactMe";
// import {Flash} from 'react-awesome-reveal'
import ContactImage from "./ContactImage";
import { Bounce, Flip, Fade } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [anime, setAnime] = useState(false);

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
    observer.observe(document?.querySelector("main"));
  }, []);

  return (
    <div id="contact">
      <div className="bg">
        <Bounce left big delay={1200}>
          <header>
            <h1>contact me</h1>
            {/* <Flash  delay={2500}> */}
            <p className="sub">
              Do you have any
              <strong> questions</strong>, <strong>proposal</strong>, or{" "}
              <strong>opportunities</strong>. Kindly indulge in filling the form
              below or Contact me on any social icon you feel most comfortable
              to discuss you Idea.
            </p>
            {/* </Flash> */}
          </header>
        </Bounce>
      </div>
      <ScrollUp />
      <main>
        <Fade big bottom when={anime}>
          <ContactImage />
        </Fade>
        <Flip top big when={anime}>
          <ContactMe />
        </Flip>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
