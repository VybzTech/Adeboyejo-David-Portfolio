import React from "react";
import { SKILLS } from "../Utils";
// import { Button } from '@material-ui/core'
import { withRouter } from "react-router-dom";

const KeySkills = withRouter(({ history }) => {
  return (
    <div className="keySkills">
      <h2>key skills</h2>
      <div className="skillList">
        {SKILLS.map((ski) => {
          return (
            <div key={ski.id}>
              <div className="skillName">
                <p>{ski.name}</p>
              </div>
              <div>
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
      <button
        onClick={() => {
          history.push("/Contact");
        }}
      >
        HIRE ME
      </button>
    </div>
  );
});

export default KeySkills;
