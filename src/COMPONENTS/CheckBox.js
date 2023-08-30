import React from "react";

const CheckBox = (props) => {
	const { name, label, nameDis, setNameDis } = props;
	return (
		<div className="checkControl">
			<input
				type="checkbox"
				value={name}
				onClick={() => {
					setNameDis(!nameDis);
				}}
			/>
			<label>{label}</label>
		</div>
	);
};

export default CheckBox;
