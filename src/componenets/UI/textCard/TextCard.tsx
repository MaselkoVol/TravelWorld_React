import React from 'react'
import "./TextCard.scss";
type Props = {
	iconClass?: string
	title: string,
	text: string,
	className?: string,
}

function TextCard({ iconClass, title, text, className }: Props) {
	return (
		<div className={`text-card ${className ? className : ""}`}>
			<div className={`text-card__icon ${iconClass ? "" : "no-icon"}`}>
				<i className={`text-card__icon-content ${iconClass ? iconClass : ""}`}></i>
			</div>
			<div className='text-card__content'>
				<h3 className='text-card__title'>{title}</h3>
				<p className='text-card__text'>{text}</p>
			</div>
		</div>
	)
}

export default TextCard