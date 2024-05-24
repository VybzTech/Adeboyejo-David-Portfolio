import React from "react";

const FAnswer = ({ question, showAns }) => {
	if (showAns) {
		return (
			<div
				className={`answer${question.id} ${
					!showAns ? "FAQToggle" : ""
				}`}
			>
				<p>{question.answer}</p>
				<button>
					<span>more results</span>
				</button>
			</div>
		);
	} else {
		return "";
	}
};

export default FAnswer;
