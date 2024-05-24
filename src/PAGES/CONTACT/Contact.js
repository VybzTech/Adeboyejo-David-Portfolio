import React from "react";
import ContactMe from "./ContactMe";
import ContactImage from "./ContactImage";
import Pleasantries from "./Pleasantries";
import Footer from "../../COMPONENTS/Footer";
import { Toaster } from "react-hot-toast";

const Contact = () => {
  return (
    <div id="contact">
      <div className="bg" children={<Pleasantries />} />
      {/*  AttentionSeeker  Bounce  Fade  Flip Hinge JackInTheBox Roll Rotate Slide Zoom */}
      <main>
        <Toaster position="bottom-left" reverseOrder={true} />
        <ContactImage />
        <ContactMe />
      </main>
    </div>
  );
};

export default Contact;
