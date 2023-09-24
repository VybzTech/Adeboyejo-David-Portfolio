import React from "react";

const ServiceCard = ({ service }) => {
  const { name, content, img } = service;
  return (
    <div className="service">
      <div className="icon">{img}</div>
      <h4>{name}</h4>
      <p>{content}</p>
      <div className="backdrop">{img}</div>
    </div>
  );
};

export default ServiceCard;
