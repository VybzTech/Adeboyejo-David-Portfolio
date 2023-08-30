import React from "react";
// import { ErrorOutlineTwoTone } from "@material-ui/icons";

const FormError = (props) => {
  return (
    <>
      {/* <ErrorOutlineTwoTone /> */}
      {props.children}
    </>
  );
};

export default FormError;
