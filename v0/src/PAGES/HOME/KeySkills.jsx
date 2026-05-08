import React, { useEffect, useState } from "react";
import { SKILLS } from "../Utils";
import { useNavigate } from "react-router-dom";
import SkillPill from "./SkillPill";

const KeySkills = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <h2 className="headings">Key Skills</h2>
      </div>
      <div className="skillList">
        {SKILLS.map((ski) => {
          return <SkillPill key={ski.id} ski={ski} />;
        })}
      </div>
      <div>
        <button
          onClick={() => {
            navigate("/Contact");
            document.documentElement.scrollTop = 0;
          }}
          className="btn"
          variant="outlined"
        >
          HIRE ME
        </button>
      </div>
    </>
  );
};

export default KeySkills;
