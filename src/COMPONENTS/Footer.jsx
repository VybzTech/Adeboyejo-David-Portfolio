import React from "react";
import { socialLinks } from "../PAGES/Utils";
import { Fade } from "react-awesome-reveal";
import ArrowUp from "../ICONS/ArrowUp";

const Footer = () => {
  return (
    <React.Fragment>
      <section className="BottomColor"></section>
      <section className="foot">
        <div className="socials">
          <Fade big triggerOnce>
            {socialLinks.map((social) => {
              return (
                <a
                  key={social.name}
                  className="socialButton"
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {social?.icon}
                </a>
              );
            })}
          </Fade>
        </div>
        <div
          onClick={() => {
            document.documentElement.scrollTop = 0;
          }}
          className="py-1 rounded rounded-md px-2 mb-1 w-fit m-auto capitalize text-[9.5px] transition-all ease-in-out text-gray-100 opacity-30 hover:animate-pulse cursor-pointer hover:bg-zinc-900"
        >
          <ArrowUp /> <p>back to top</p>
        </div>
        <div className="copyx0">
          <h5>David's Portfolio &copy; 2021. All Rights Reserved.</h5>
        </div>
      </section>
    </React.Fragment>
  );
};
export default Footer;
