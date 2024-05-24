import React from "react";
import FAQs from "./FAQs";
import Donate from "./Donate";
import Privacy from "./Privacy";
import Pricing from "./Pricing";
import ReactDOM from "react-dom";

const PortfolioPortal = (props) => {
  const { showPortal, setShowPortal } = props;

  return (
    <React.Fragment>
      {showPortal
        ? ReactDOM.createPortal(
            <React.Fragment>
              <div id="portfolioPortal">
                <div
                  className="clsArea"
                  onClick={() => {
                    setShowPortal((p) => !p);
                  }}
                />
                <div className="portalContent">
                  <header>
                    <h1>JOIN HUNDRED OF COMPANIES USING REACT JS</h1>
                    <button
                      title="Close"
                      onClick={() => {
                        setShowPortal((p) => !p);
                      }}
                    >
                      <svg
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                      </svg>
                    </button>
                  </header>
                  <blockquote>
                    <p>
                      As you journey through my portfolio you may have asked
                      yourself, What is <em> REACT JS ? </em>
                      React popularly known as React. js or ReactJS is a free
                      and open-source front-end JavaScript library that I use to
                      build user interfaces or UI components, that can be used
                      as a base in the development of single-page or mobile
                      applications. It is maintained by Facebook and a community
                      of individual developers & companies. There are lot of
                      Companies that utilize React in their web development
                      projects today, few of which includes Facebook, Asana,
                      Netflix, Dropbox and the list goes on.
                    </p>
                    <p>
                      There is a high number of technologies that could be used
                      in building user interfaces in a web/mobile development
                      project, yet in my research there is a higher demand for
                      React Responsive Applications amongst its contemporaries.
                      In my pursuit of knowledge about web development, learning
                      React was my best choice as it is a flexible and efficient
                      library and also very easy to update in case of code
                      deprecation. So, trust you're making the right decision
                      when hiring me to visualize a sea of ordinary and set your
                      web page aside from the competition implementing the most
                      magnificient features you could think of !
                    </p>
                  </blockquote>
                  <hr />
                  <Donate />
                  <hr />
                  <FAQs />
                  <hr />
                  <Privacy />
                  <hr />
                  <Pricing />
                  <hr className="adv" />
                  <div className="copyx1">
                    <>
                      <svg
                        viewBox="0 0 589 439"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M381.59 415.34L306.962 310.061C306.962 310.061 295.739 310 271.414 309C247.089 308 207.988 308 207.988 308L280.617 415.34C298.436 417.34 356.93 415.933 381.56 415.341L381.59 415.34Z" />
                        <path d="M588.719 206.722C588.719 80 484.986 16.8185 432.302 8.04141C409.83 4.29756 315.538 1.01603 257.986 0.136963C177.542 2.17553 111.986 2.21454 78.9858 4.21454L146.833 103.027C268.986 102 336.864 105.373 367.925 109.2C398.986 113.027 462.12 144.985 462.12 207.492C462.12 270 417.986 301.999 316.859 308.88L391.918 415C422.948 415.545 444.52 413.023 467.04 403.456C566.624 361.152 588.719 301.57 588.719 206.722Z" />
                        <path d="M138.163 416.911L277.34 208.668L208.162 102.006L0.000187624 415.911L138.163 416.911Z" />
                      </svg>
                    </>
                    avid's Portfolio &copy; 2021.
                  </div>
                </div>
                <div
                  className="clsArea"
                  onClick={() => {
                    setShowPortal(!showPortal);
                  }}
                />
              </div>
            </React.Fragment>,
            document.getElementById("portals")
          )
        : ""}
    </React.Fragment>
  );
};

export default PortfolioPortal;
