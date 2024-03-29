import React from "react";
import { contactList } from "../Utils";
import { Slide, Zoom } from "react-awesome-reveal";

const ContactDetails = () => {
  return (
    <div>
      <Slide className="hero" triggerOnce>
        <>
          <div />
          <h3>let's get social</h3>
          <div />
        </>
      </Slide>
      <div className="socials">
        <Zoom triggerOnce cascade>
          {contactList?.map((cont) => {
            if (typeof cont.fnc === "number") {
              return (
                <button
                  key={cont.name}
                  title={cont.name}
                  href={`tel:+${cont.fnc}`}
                >
                  {cont.icon}
                </button>
              );
            }
            return (
              <button
                key={cont.name}
                title={cont.name}
                onClick={() => {
                  window.open(cont.fnc, "_blank");
                }}
              >
                {cont.icon}
              </button>
            );
          })}
        </Zoom>
      </div>
    </div>
  );
};

export default ContactDetails;
