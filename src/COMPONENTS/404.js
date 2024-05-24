import React from "react";
// import { withRouter } from "react-router";

// const Page404 = withRouter(({ history, match }) => {
const Page404 = () => {
  // { history, match }
  return (
    <div id="P404">
      <div className="bgContent">
        <h1>
          <span>404</span> page not found
        </h1>
        <nav>
          {/* Oops, The Page {match?.url} Was Not Found In David's Portfolio. You */}
          Oops, the requested page was not found in David's Portfolio. You can
          navigate the website using the links in the Navbar or
          <span
            onClick={() => {
              // history?.push("/");
            }}
          >
            Go Home
          </span>
        </nav>
      </div>
    </div>
  );
};

export default Page404;
