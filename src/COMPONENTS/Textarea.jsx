import React from "react";
import FormError from "./FormError";
import { Field, ErrorMessage } from "formik";

const Textarea = (props) => {
  const { name, label, err, star, ...rest } = props;
  return (
    <div className="formControl">
      <div>
        <label htmlFor={name}>
          {label} {star ? <sup>*</sup> : null}
        </label>
        <Field id={name} as="textarea" name={name} {...rest} />
      </div>
      <span className={err.name ? "err" : ""}>
        <ErrorMessage name={name} component={FormError} />
      </span>
    </div>
  );
};

export default Textarea;
