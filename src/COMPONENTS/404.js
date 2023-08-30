import React from "react";
import { withRouter } from "react-router";

const Page404 = withRouter(({ history, match }) => {
  return (
    <div id="P404">
      <div className="bgContent">
        <h1>
          <span>404</span> page not found
        </h1>
        <nav>
          Oops, The Page {match?.url} Was Not Found In David's Portfolio. You
          Can Navigate The Site Using The Links In The Navbar or
          <span
            onClick={() => {
              history?.push("/");
            }}
          >
            Go Home
          </span>
        </nav>
      </div>
    </div>
  );
});

export default Page404;
