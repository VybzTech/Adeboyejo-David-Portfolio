import React from "react";
import Logo from "./Logo";

const Loader = () => {
  return (
    <div className="Loader">
      <div className="">
        <Logo svgWidth="auto" svgFill={"#222"} AFill={"#135be8"} />
        <div className={`progress`} />
      </div>
    </div>
  );
};

export default Loader;
