import React from "react";
// import {
// 	Card,
// 	CardContent,
// 	CardActions,
// } from "@material-ui/core";

const IndividualPrice = ({ content }) => {
  return (
    <React.Fragment>
      {content.subPackage.map((pack) => {
        return (
          <>.card</>
          // <Card key={pack.name} className="card">
          // 	<div className="cardHeader">
          // 		<h3>{pack.name}</h3>
          // 		<p>{pack.intro}</p>
          // 	</div>
          // 	<button>{pack.button}</button>
          // 	<CardActions>
          // 		<strong>{pack.prices.left}</strong>
          // 		{pack.prices.right}
          // 	</CardActions>
          // 	<CardContent>
          // 		<ul>
          // 			<strong>{pack.featHead}</strong>
          // 			{pack.features.map((ft) => {
          // 				return (
          // 					<li key={ft}>
          // 						<svg
          // 							xmlns="http://www.w3.org/2000/svg"
          // 							viewBox="0 0 512 512"
          // 						>
          // 							<path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z" />
          // 						</svg>
          // 						{ft}
          // 					</li>
          // 				);
          // 			})}
          // 		</ul>
          // 	</CardContent>
          // </Card>
        );
      })}
    </React.Fragment>
  );
};

export default IndividualPrice;
