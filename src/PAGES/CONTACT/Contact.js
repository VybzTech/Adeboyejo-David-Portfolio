import Footer from "../../COMPONENTS/Footer";
import ScrollUp from "../../COMPONENTS/ScrollUp";
import ContactMe from "./ContactMe";
// import {Flash} from 'react-awesome-reveal'
import ContactImage from "./ContactImage";
import { Bounce, Flip, Fade } from "react-awesome-reveal";
import React, { useState, useEffect } from "react";
import Pleasantries from "./Pleasantries";

const Contact = () => {

  return (
    <div id="contact">
      <div className="bg" children={<Pleasantries />} />
      {/*  AttentionSeeker  Bounce  Fade  Flip Hinge JackInTheBox Roll Rotate Slide Zoom */}
      <main>
        {/* <ContactImage />   */}
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
