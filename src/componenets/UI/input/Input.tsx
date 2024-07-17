import React from 'react'
import "./Input.scss";
type Props = React.InputHTMLAttributes<HTMLInputElement> & {
	children?: React.ReactNode,
	className?: string,
}

function Input({ children, className, ...args }: Props) {
	return (
		<input className={`input ${className ? className : ""}`} {...args}>{children}</input>
	)
}

export default Input;