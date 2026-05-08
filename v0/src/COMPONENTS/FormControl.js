import React from "react";
import Input from "./Input";
import Textarea from "./Textarea";

const FormControl = ({ control, ...rest }) => {
  switch (control) {
    case "textarea":
      return <Textarea {...rest} />;
    default:
      return <Input {...rest} />;
  }
};

export default FormControl;
