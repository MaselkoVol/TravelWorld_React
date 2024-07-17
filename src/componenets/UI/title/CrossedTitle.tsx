import React from 'react'
import "./Title.scss";
type Props = {
	children: React.ReactElement,
	className?: string,
}

function CrossedTitle({ children, className }: Props) {
	return (
		<div className={`crossed-header ${className ? className : ""}`}>
			<div className={`crossed-header__text`}>
				{children}
			</div>
		</div>
	)
}

export default CrossedTitle