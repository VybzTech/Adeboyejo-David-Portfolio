import FAnswer from "./FAnswer";
// import { IconButton } from '@material-ui/core'
// import { KeyboardArrowDown } from '@material-ui/icons'
import React, { useState, useEffect } from "react";

const FAQuetsion = ({ question, count, setCount, subCount, setSubCount }) => {
  const [showAns, setShowAns] = useState(false);

  useEffect(() => {
    if (subCount > 2) {
      setCount(count + 1);
      return () => {
        setSubCount(0);
      };
    }
  }, [count, setCount, subCount, setSubCount]);

  return (
    <div key={question.id} className="questionDiv">
      <div className={`question${question.id} ${showAns ? "nullBorder" : ""}`}>
        <div className="question">
          <p>{question.question}</p>
          <button
            className={`${showAns ? "btn spin" : "btn"}`}
            onClick={() => {
              setShowAns(!showAns);
              if (showAns) {
                return true;
              } else {
                setSubCount(subCount + 1);
              }
            }}
          >
            KeyboardArrowDown
            {/* <KeyboardArrowDown /> */}
          </button>
        </div>
      </div>
      <FAnswer question={question} showAns={showAns} setShowAns={setShowAns} />
    </div>
  );
};

export default FAQuetsion;
