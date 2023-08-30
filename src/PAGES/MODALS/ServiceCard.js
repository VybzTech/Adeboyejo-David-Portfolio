import React from "react";

const ServiceCard = ({ service }) => {
	const { name, content } = service;
	return (
		<div className="service">
			<h4>{name}</h4>
			<p>{content}</p>
		</div>
	);
};

export default ServiceCard;
