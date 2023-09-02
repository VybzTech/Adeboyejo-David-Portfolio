import React from "react";
import Logo from "./Logo";
// import { useEffect } from "react";
// import { useState } from "react";

const Loader = () => {
  // const [width, setWidth] = useState('10')
  // useEffect(() => {
  // // setInterval(
  // //   setWidth('full')
  // //   ,1500)

  //   // setWidth('0')
  // }, [])

  return (
    <div className="Loader">
      <div className="">
        <Logo svgWidth="7vw" svgFill={"#222"} AFill={"#135be8"} />
        <div
          className={`progress`}
        />
      </div>
    </div>
  );
};

export default Loader;
