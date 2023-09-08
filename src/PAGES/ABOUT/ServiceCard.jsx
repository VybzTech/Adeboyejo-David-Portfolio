import React from "react";

const ServiceCard = ({ service }) => {
  const { name, content, img } = service;
  console.log(img)
  return (
    <div className="service">
<>{img}</>
      {/* <img src={img} alt={name} srcset={name} /> */}
	  <h4>{name}</h4>
      <p>{content}</p>
    </div>
  );
};

export default ServiceCard;
