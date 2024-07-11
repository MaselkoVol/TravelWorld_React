import React, { useEffect } from 'react'
import "./LoginPage.scss";
import { useHeaderType } from '../../App';
type Props = {}

function LoginPage({}: Props) {
	const setHeaderType = useHeaderType();
	useEffect(() => {
		setHeaderType("login");
	}, [])
	return (
		<div>LoginPage</div>
	)
}

export default LoginPage