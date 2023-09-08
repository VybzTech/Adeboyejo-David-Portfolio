import React from "react";

const ServiceCard = ({ service }) => {
  const { name, content, img } = service;
  return (
    <div className="service">
      <img src={img} alt={name} srcset={name} />
      <h4>{name}</h4>
      <p>{content}</p>
    </div>
  );
};

export default ServiceCard;
