import React from 'react'
import "./SubmitInput.scss";
import { Form } from 'react-router-dom';
type Props = {
	className?: string,
}

const SubmitInput = ({className}: Props) => {
	return (
		<Form className={`submit-input ${className ? className : ""}`} method="post">
			<input placeholder='Enter your email' className='submit-input__input' type="text" name="title" />
			<button className='submit-input__submit' type="submit">Subscribe</button>
		</Form>
	)
}

export default SubmitInput