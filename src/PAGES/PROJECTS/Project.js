import React from "react";
// import {
// 	GitHub,
// 	OpenInNew,
// } from "@material-ui/icons";

const Project = (props) => {
  const { content, utilities, img1, git, link } = props.file;
  return (
    <div
      className="img"
      style={{
        backgroundImage: `linear-gradient(180deg, #0001, #0002),url(${img1})`,
      }}
    >
      <div className="contentWrapper">
        <p>{content.length > 200 ? content.substr(0, 190) + "..." : content}</p>
        <div className="actions">
          <button
            onClick={() => {
              window.open(git, "_blank");
            }}
          >
            <></>
          </button>
          <button
            onClick={() => {
              window.open(link, "_blank");
            }}
          >
            <></>
          </button>
        </div>
        <ul>
          {utilities?.map((util) => {
            return <li key={util}>{util}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Project;
