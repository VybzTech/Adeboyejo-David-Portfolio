import React, { useEffect } from "react";
// import { LightSpeed } from "react-awesome-reveal";
// import {
// 	Brightness7,
// 	Brightness3,
// } from '@material-ui/icons'
import {
  Tooltip,
  initTE,
} from "tw-elements";


const Theme = ({ theme, setTheme }) => {
  useEffect(
()=>{
    initTE({ Tooltip })
  },[])

  return (
    <div className="theme">
{/* <p>
  Hover the link to see the
  <a
    href="#"
    class="transititext-primary text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
    data-te-toggle="tooltip"
    title="Hi! I'm tooltip"
    >tooltip</a
  >
</p> */}

      {/* <LightSpeed 
        right
        appear
        spy={theme}
        duration={750}
        delay={theme ? 90 : 850}
      > */}
      <button
        onClick={() => {
          setTheme((t) => !t);
        }}
      >
        {/* {theme ? (
						// <Brightness3 />
						
					) : (
						// <Brightness7 />
					)} */}
      </button>
      {/* </LightSpeed> */}
    </div>
  );
};

export default Theme;
