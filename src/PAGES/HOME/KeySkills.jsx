import React, { useEffect, useState } from "react";
import { SKILLS } from "../Utils";
// import { withRouter } from "react-ro uter-dom";
import SkillPill from "./SkillPill";

const KeySkills = () => {
  // const KeySkills = withRouter(({ history }) => {
  // const refill = (val) => {
  //   set(val);
  // };
  return (
    <>
      <div>
        <h2>Key Skills</h2>
      </div>
      <div className="skillList">
        {SKILLS.map((ski) => {
          return <SkillPill key={ski.id} ski={ski} />;
        })}
      </div>
      <div>
        <button
          onClick={() => {
            // history.push("/Contact");
            // history.push("/Contact");
            document.documentElement.scrollTop = 0;
          }}
          className="btn"
        >
          HIRE ME
        </button>
      </div>
    </>
  );
};

export default KeySkills;
