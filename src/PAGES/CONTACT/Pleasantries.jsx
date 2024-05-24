import React from "react";
import { Bounce, Roll } from "react-awesome-reveal";

const Pleasantries = () => {
  return (
    <Bounce big delay={1500} triggerOnce className="Pleasantries">
      <header>
        <h1>contact me</h1>
        <Roll triggerOnce delay={1500}>
          <p className="sub">
            Do you have any
            <strong> questions</strong>, <strong>proposal</strong>, or{" "}
            <strong>opportunities</strong>. Kindly indulge in filling the form
            below or Contact me on any social media you feel most comfortable
            with to discuss your idea.
          </p>
        </Roll>
      </header>
    </Bounce>
  );
};

export default Pleasantries;
