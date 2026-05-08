import "./SCSS/App.css";
import Page404 from "./COMPONENTS/404";
import Layout from "./COMPONENTS/Layout";
import React, { useState, lazy } from "react";
import ErrorHandler from "./COMPONENTS/ErrorHandler";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./COMPONENTS/Loader";

const loadDuration = 2000;

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

  return (
    <>
      <Router>
        <React.Suspense fallback={<Loader />}>
          <Layout theme={theme} setTheme={setTheme}>
            <Routes>
              <Route element={<Home />} path="/" exact />
              <Route element={<Projects />} exact path="/Projects" />
              <Route element={<Contact />} exact path="/Contact" />
              <Route element={<About />} exact path="/About" />
              <Route path="/*" component={Page404} />
            </Routes>
          </Layout>
        </React.Suspense>
      </Router>
    </>
  );
}

export default App;
