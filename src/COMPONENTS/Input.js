import React from "react";
import FormError from "./FormError";
import { Field, ErrorMessage } from "formik";

const Input = (props) => {
	const { name, label, err, star, ...rest } =
		props;
	return (
		<div className="formControl">
			<label htmlFor={name}>
				{label} {star ? <span>*</span> : null}
			</label>
			<Field id={name} name={name} {...rest} />
			<span className={err.name ? "err" : ""}>
				<ErrorMessage
					err={err.name}
					name={name}
					component={FormError}
				/>
			</span>
		</div>
	);
};

export default Input;
