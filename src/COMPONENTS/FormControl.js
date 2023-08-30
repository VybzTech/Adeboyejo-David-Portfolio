import React from 'react'
import Input from './Input'
import CheckBox from './CheckBox'
import Textarea from './Textarea'

const FormControl = ({ control, ...rest }) => {
	switch (control) {
		case 'checkbox':
			return <CheckBox {...rest} />
		case 'textarea':
			return <Textarea {...rest} />
		default:
			return <Input {...rest} />
	}
}

export default FormControl
