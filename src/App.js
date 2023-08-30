import "./SCSS/App.css";
import Page404 from "./COMPONENTS/404";
import Layout from "./COMPONENTS/Layout";
// import config from "react-reveal/globals";
import React, { useState, lazy } from "react";
import ErrorHandler from "./COMPONENTS/ErrorHandler";
// import { animated, useSpring } from 'react-spring'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Loader from "./COMPONENTS/Loader";

// config({ ssrFadeout: true });

const loadDuration = 25.0;

const Home = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./PAGES/HOME/Home"),
    new Promise((resolve) => setTimeout(resolve, loadDuration)),
  ]);
  return moduleExports;
});

const Projects = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./PAGES/PROJECTS/Projects"),
    new Promise((resolve) => setTimeout(resolve, loadDuration)),
  ]);
  return moduleExports;
});

const Contact = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./PAGES/CONTACT/Contact"),
    new Promise((resolve) => setTimeout(resolve, loadDuration)),
  ]);
  return moduleExports;
});

const About = lazy(async () => {
  const [moduleExports] = await Promise.all([
    import("./PAGES/ABOUT/About"),
    new Promise((resolve) => setTimeout(resolve, loadDuration)),
  ]);
  return moduleExports;
});

function App() {
  const [theme, setTheme] = useState(false);
  const svgProps = {
    width: "7vw",
    viewBox: "0 0 589 439",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    d: {
      path1:
        "M381.59 415.34L306.962 310.061C306.962 310.061 295.739 310 271.414 309C247.089 308 207.988 308 207.988 308L280.617 415.34C298.436 417.34 356.93 415.933 381.56 415.341L381.59 415.34Z",
      path2:
        "M588.719 206.722C588.719 80 484.986 16.8185 432.302 8.04141C409.83 4.29756 315.538 1.01603 257.986 0.136963C177.542 2.17553 111.986 2.21454 78.9858 4.21454L146.833 103.027C268.986 102 336.864 105.373 367.925 109.2C398.986 113.027 462.12 144.985 462.12 207.492C462.12 270 417.986 301.999 316.859 308.88L391.918 415C422.948 415.545 444.52 413.023 467.04 403.456C566.624 361.152 588.719 301.57 588.719 206.722Z",
      path3:
        "M138.163 416.911L277.34 208.668L208.162 102.006L0.000187624 415.911L138.163 416.911Z",
    },
  };

  const loaderDiv = {
    width: "100%",
    height: "100vh",
    background: theme
      ? "linear-gradient(0deg, #333, #444)"
      : "linear-gradient(0deg, #fff, #fafafa)",
    zIndex: 99,
  };
  const loaderWrap = {
    padding: "40vh 45% 0",
    width: "fit-content",
  };

  // const slash = useSpring({
  // 	config: {
  // 		delay: 150,
  // 		duration: loadDuration / 5,
  // 	},
  // 	loop: { reverse: true },
  // 	from: {
  // 		opacity: 0,
  // 		fill: theme ? '#f22' : '#135be8',
  // 	},
  // 	to: {
  // 		opacity: 1,
  // 		fill: theme ? '#f22' : '#135be8',
  // 	},
  // })
  // const progress = useSpring({
  // 	config: {
  // 		delay: 200,
  // 		duration: loadDuration / 1.1,
  // 	},
  // 	loop: { reverse: true },
  // 	from: {
  // 		width: '0.5vw',
  // 		margin: '2vh 0 0 -5vh',
  // 		borderRadius: 4,
  // 		height: 3.5,
  // 		backgroundColor: theme ? '#aaa' : '#222',
  // 	},
  // 	to: {
  // 		width: '12vw',
  // 		backgroundColor: theme ? '#aaa' : '#222',
  // 	},
  // })

  return (
    <>
      <Router>
        <React.Suspense
          fallback={
            //           <div id="loader" style={loaderDiv}>
            //             <div style={loaderWrap}>
            //               <svg {...svgProps}>
            //               {/*
            // 								<animated.path
            // 									style={slash}
            // 									d={svgProps.d.path1}
            // 								/>
            // 								<path
            // 									style={{ zIndex: 5 }}
            // 									fill={
            // 										theme ? '#f1f1f1' : '#222'
            // 									}
            // 									d={svgProps.d.path2}
            // 								/>
            // 								<path
            // 									style={{ zIndex: 5 }}
            // 									fill={
            // 										theme ? '#f1f1f1' : '#222'
            // 									}
            // 									d={svgProps.d.path3}
            // 								/>
            //                 <animated.div
            // 								className='progress'
            // 								style={progress}
            // 							/> */}
            //                 </svg>
            //               <div
            //               className='progress w-[0.5vw]'
            // // 		margin: '2vh 0 0 -5vh',
            // // 		borderRadius: 4,
            // // 		height: 3.5,
            // // 		backgroundColor: theme ? '#aaa' : '#222','
            //               // style={progress}
            //               />
            //             </div>
            //           </div>
            <Loader />
          }
        >
          {/* <Layout theme={theme} setTheme={setTheme}> */}
          <ErrorHandler>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/Projects">
                <Projects />
              </Route>
              <Route exact path="/Contact">
                <Contact />
              </Route>
              <Route exact path="/About">
                <About />
              </Route>
              <Route path="/*" component={Page404} />
            </Switch>
          </ErrorHandler>
          {/* </Layout> */}
        </React.Suspense>
      </Router>
    </>
  );
}

export default App;
