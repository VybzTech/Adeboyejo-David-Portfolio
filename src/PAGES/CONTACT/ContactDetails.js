import React from "react";
import { contactList } from "../Utils";
// import { IconButton } from '@material-ui/core'

const ContactDetails = () => {
  return (
    <section>
      <div className="hero">
        <div />
        <h3>lets get social</h3>
      </div>
      <div className="socials">
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
      </div>
    </section>
  );
};

export default ContactDetails;
