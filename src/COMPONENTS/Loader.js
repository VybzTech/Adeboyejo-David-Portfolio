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
    <div className="Loader w-full h-[100vh]">
      <div className="m-auto w-fit h-fit mt-[40vh]">
        <Logo svgWidth="7vw" svgFill={"#222"} AFill={"#135be8"} />
        <div
          className={`progress h-1 bg-gray-900 rounded my-3 duration-300 ease`}
        />
      </div>
    </div>
  );
};

export default Loader;
