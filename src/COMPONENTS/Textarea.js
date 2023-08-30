import React from 'react'
import FormError from '../COMPONENTS/FormError'
import { Field, ErrorMessage } from 'formik'

const Textarea = (props) => {
	const { name, label, err, star, ...rest } =
		props
	return (
		<div className='formControl'>
			<label htmlFor={name}>
				{label} {star ? <span>*</span> : null}
			</label>
			<Field
				id={name}
				as='textarea'
				name={name}
				{...rest}
			/>
			<span className={err.name ? 'err' : ''}>
				<ErrorMessage
					name={name}
					component={FormError}
				/>
			</span>
		</div>
	)
}

export default Textarea
