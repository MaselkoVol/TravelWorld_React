import React, { useEffect } from 'react'
import "./RegisterPage.scss";
import { useHeaderType } from '../../App';
type Props = {}

function RegisterPage({ }: Props) {
	const setHeaderType = useHeaderType();
	useEffect(() => {
		setHeaderType("register");
	}, [])
	return (
		<div>RegisterPage</div>
	)
}

export default RegisterPage