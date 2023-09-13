import React from "react";

const ServiceCard = ({ service }) => {
  const { name, content, img } = service;
  console.log(img);
  return (
    <div className="service">
      <div className="icon">
        {img}
        {/* <img
        className="img"
        // className="w-full w-10 text-green-300" 
        src={img} alt={name} /> */}
      </div>
      <h4>{name}</h4>
      <p>{content}</p>
    </div>
  );
};

export default ServiceCard;
