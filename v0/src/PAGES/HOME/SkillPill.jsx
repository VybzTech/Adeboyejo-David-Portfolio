import React from "react";

const SkillPill = ({ ski }) => {
  const { id, name, progress } = ski;

  return (
    <div className={`skillPill ${id}`}>
      <div
        className="progress Bar"
        style={{
          width: progress,
        }}
      />
      <p className="skillName" children={name} />
    </div>
  );
};

export default SkillPill;
