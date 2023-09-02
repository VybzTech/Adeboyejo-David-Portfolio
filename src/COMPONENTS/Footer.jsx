import React from "react";
// import React, { useState, useEffect } from 'react'
// import PortfolioPortal from '../MODALS/PortfolioPortal'
import { socialLinks } from "../PAGES/Utils";
import { Fade } from "react-awesome-reveal";
// import { IconButton } from '@material-ui/core'

const Footer = () => {
  // const [showPortal, setShowPortal] = useState(false)
  // const [High, set] = useState([])

  // useEffect(() => {
  // 	if (showPortal) {
  // 		Assign()
  // 	}
  // }, [showPortal])

  // const Assign = () => {
  // 	const Elems = []
  // 	Elems.push(
  // 		document?.getElementById('donate')
  // 			?.offsetTop
  // 	)
  // 	Elems.push(
  // 		document?.getElementById('FAQs')?.offsetTop
  // 	)
  // 	Elems.push(
  // 		document?.getElementById('privacy')
  // 			?.offsetTop
  // 	)
  // 	Elems.push(
  // 		document?.getElementById('pricing')
  // 			?.offsetTop
  // 	)
  // 	set(Elems)
  // }

  return (
    <React.Fragment>
      <div className="BottomColor"></div>
      <div className="foot">
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
        <div className="copyx0">
          <h5>David's Portfolio &copy; 2021. All Rights Reserved.</h5>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
