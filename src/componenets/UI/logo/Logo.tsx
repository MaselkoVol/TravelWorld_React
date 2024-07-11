import React from 'react'
import "./Logo.scss";
type Props = {
	className?: string,
}

function Logo({ className }: Props) {
	return (
		<div className={`website-logo ${className ? className : ""}`}>
			<img src={require("../../../utils/images/png/logo.png")} alt="logo" />
		</div>
	)
}

export default Logo