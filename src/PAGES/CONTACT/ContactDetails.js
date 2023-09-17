import React from "react";
import { contactList } from "../Utils";
import { Slide, Zoom } from "react-awesome-reveal";
// import { IconButton } from '@material-ui/core'

const ContactDetails = () => {
  return (
    <>
      <Slide className="hero">
        <>
          <div />
          <h3>let's get social</h3>
          <div />
        </>
      </Slide>
      <div className="socials">
        <Zoom triggerOnce cascade>
          {/* delay={1500} */}
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
    </>
  );
};

export default ContactDetails;
