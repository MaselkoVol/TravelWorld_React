import React from 'react'
import "./Loader.scss";
type Props = {
	className?: string,
}

function Loader({ className }: Props) {
	return (
		<div className={`loader ${className ? className : ""}`}></div>
	)
}

export default Loader