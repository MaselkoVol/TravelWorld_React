import React from 'react'
import "./Button.scss";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode,
	className?: string,
}

function PaginationButton({ children, className, ...args }: Props) {
	return (
		<button className={`pagination-button ${className ? className : ""}`} {...args}>{children}</button>
	)
}

export default PaginationButton;