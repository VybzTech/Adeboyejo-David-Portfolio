import React from "react";
import ReactDOM from "react-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import FileSaver from "file-saver";
import ResumePic from "../IMAGES/RESUME.png";
import ArrowDownTray from "../ICONS/ArrowDownTray";
const Resume = (props) => {
  const handleDownload = () => {
    return FileSaver.saveAs(
      process.env.PUBLIC_URL + "dist/RESUME.pdf",
      "Adeboyejo David's Resume.pdf"
    );
  };
  const { showCV, setShowCV } = props;
  if (showCV) {
    return ReactDOM.createPortal(
      <Zoom id="Resume" triggerOnce big delay={1000}>
        <Fade className="ResumeImg" big triggerOnce delay={300}>
          {/* <div > */}
          <img src={ResumePic} alt="My Resume" />
          {/* </div> */}
        </Fade>
        <div className="ResumeDwn">
          <button onClick={handleDownload} title="Download Resume">
            <span className="flex items-center">
              <ArrowDownTray />
              <p>Download resume</p>
            </span>
            {/* <CloudDownloadRounded /> */}
          </button>
          <button
            title="Close"
            onClick={() => {
              setShowCV((CV) => !CV);
            }}
          >
            <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
            </svg>
          </button>
        </div>
      </Zoom>,
      document.getElementById("portals")
    );
  }
  return "";
};
export default Resume;
