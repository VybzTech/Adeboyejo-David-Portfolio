import React from "react";
import Exclamation from "../ICONS/Exclamation";

const FormError = (props) => {
  return (
    <>
      <Exclamation />
      <span>{props.children}</span>
    </>
  );
};

export default FormError;
