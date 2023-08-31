import React from "react";
// import React, { useState, useEffect } from 'react'
// import PortfolioPortal from '../MODALS/PortfolioPortal'
import { socialLinks } from "../PAGES/Utils";
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
          <div className="socialButtons">
            {socialLinks.map((social) => {
              return (
                // <IconButton
                //   title={social.name}
                //   href={social.href}
                // >
                <div
                  key={social.name}

                >{social?.icon}</div>
                // </IconButton>
              );
            })}
          </div>
        </div>
        <div className="copyx0">
          <h5>David's Portfolio &copy; 2021. All Rights Reserved.</h5>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Footer;
