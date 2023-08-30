import React, { useEffect } from "react";

const ScrollUp = () => {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const checker = () => {
				const contained = document
					?.querySelector(".scrollUp")
					?.classList?.contains("op");
				if (
					document.documentElement.scrollTop >
						350 &&
					!contained
				) {
					//SHOW IF SCROLLED DOWN ND NOT SHOWING PRIOR
					document
						?.querySelector(".scrollUp")
						?.classList.add("op");
				} else if (contained) {
					//IF SHOWN PRIOR, REMOVE AFTER 3.2s
					setTimeout(() => {
						document
							.querySelector(".scrollUp")
							?.classList?.remove("op");
					}, 3200);
				} else {
					//ALREADY SHOWIN OR NOT NEEDED DONT DISPLAY
					setTimeout(() => {
						document
							.querySelector(".scrollUp")
							?.classList?.remove("op");
					}, 750);
				}
			};
			checker();
		});
		return () => {
			window.removeEventListener(
				"scroll",
				() => {}
			);
		};
	}, []);

	return (
		<div
			className="scrollUp"
			onClick={() => {
				document.documentElement.scrollTop = 0;
			}}
		>
			<svg
				version="1.2"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
			>
				<path d="M13 5.586l-4.707 4.707c-.391.391-.391 1.023 0 1.414s1.023.391 1.414 0l2.293-2.293v7.586c0 .552.447 1 1 1s1-.448 1-1v-7.586l2.293 2.293c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414l-4.707-4.707z" />
			</svg>
			Scroll Up
		</div>
	);
};
export default ScrollUp;
