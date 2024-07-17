import React, { useEffect, useState } from 'react'
import "./LoginPage.scss";
import { useHeaderType } from '../../App';
import Login from '../../componenets/login/Login';
type Props = {}

function LoginPage({ }: Props) {

	const setHeaderType = useHeaderType();
	useEffect(() => {
		setHeaderType("login");
	}, [])
	return (
		<Login />
	)
}

export default LoginPage