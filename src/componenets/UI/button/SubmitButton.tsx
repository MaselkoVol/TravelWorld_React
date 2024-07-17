import React from 'react'
import "./Button.scss";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode,
	className?: string,
}

function SubmitButton({ children, className, ...args }: Props) {
	return (
		<button className={`submit-button ${className ? className : ""}`} {...args}>{children}</button>
	)
}

export default SubmitButton