import Footer from "../../COMPONENTS/Footer";
import ScrollUp from "../../COMPONENTS/ScrollUp";
import ContactMe from "./ContactMe";
// import {Flash} from 'react-awesome-reveal'
import ContactImage from "./ContactImage";
import { Bounce, Flip, Fade } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import Pleasantries from "./Pleasantries";

const Contact = () => {
  // const [anime, setAnime] = useState(false);

  // useEffect(() => {
  //   var observer = new IntersectionObserver(onIntersection, {
  //     root: null,
  //     threshold: 0.5,
  //   });

  //   function onIntersection(entries) {
  //     entries.forEach(() => {
  //       window.addEventListener("scroll", () => {
  //         if (window.scrollY >= 30) {
  //           setAnime(true);
  //         }
  //       });
  //     });
  //   }
  //   observer.observe(document?.querySelector("main"));
  // }, []);

  return (
    <div id="contact">
      <div className="bg" children={<Pleasantries />} />
      {/*  AttentionSeeker  Bounce  Fade  Flip Hinge JackInTheBox Roll Rotate Slide Zoom */}
      <main>
        <ContactImage />  
        {/* </Fade> */}
        {/* <Flip top big triggerOnce>
          <ContactMe />
        </Flip> */}
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
