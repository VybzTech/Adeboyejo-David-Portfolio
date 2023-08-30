import React from "react";
import { withRouter } from "react-router-dom";

const NavContextual = withRouter((props) => {
	const { history, setNavControl } = props;
	return (
		<div className="navContextual">
			<button
				onClick={() => {
					history.push("/contact");
					setNavControl((n) => !n);
				}}
			>
				hire a developer
			</button>
		</div>
	);
});

export default NavContextual;
