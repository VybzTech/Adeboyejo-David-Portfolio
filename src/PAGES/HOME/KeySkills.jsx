import React from "react";
import { SKILLS } from "../Utils";
import { withRouter } from "react-router-dom";

const KeySkills = withRouter(({ history }) => {
  return (
    <>
      <div>
        <h2>Key Skills</h2>
      </div>
      <div className="skillList">
        {SKILLS.map((ski) => {
          return (
            <div key={ski.id} className="skillPill">
              <div className="skillName">
                <p>{ski.name}</p>
              </div>
              <div className="progressBar">
                <div
                  className="progress"
                  style={{
                    width: ski.progress,
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button
          onClick={() => {
            history.push("/Contact");
              document.documentElement.scrollTop = 0;
          }}
          className="btn"
        >
          HIRE ME
        </button>
      </div>
    </>
  );
});

export default KeySkills;
