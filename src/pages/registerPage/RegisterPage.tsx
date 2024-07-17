import React, { useEffect } from 'react'
import "./RegisterPage.scss";
import { useHeaderType } from '../../App';
import Register from '../../componenets/register/Register';
type Props = {}

function RegisterPage({ }: Props) {
	const setHeaderType = useHeaderType();
	useEffect(() => {
		setHeaderType("register");
	}, [])
	return (
		<div>
			<Register />
		</div>
	)
}

export default RegisterPage