import React from "react";
import ContactMe from "./ContactMe";
import ContactImage from "./ContactImage";
import Pleasantries from "./Pleasantries";
import Footer from "../../COMPONENTS/Footer";

const Contact = () => {
  return (
    <div id="contact">
      <div className="bg" children={<Pleasantries />} />
      {/*  AttentionSeeker  Bounce  Fade  Flip Hinge JackInTheBox Roll Rotate Slide Zoom */}
      <main>
        <ContactImage />
        <ContactMe />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
