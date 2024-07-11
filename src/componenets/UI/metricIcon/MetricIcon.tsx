import React from 'react'
import "./MetricIcon.scss";
type Props = {
	title: string,
	text: string,
	className?: string
}

function MetricIcon({title, text, className}: Props) {
	return (
		<div className={`metric-icon ${className ? className : ""}`}>
			<div className='metric-icon__header'>
				<h4 className='metric-icon__title'>{title}</h4>
			</div>
			<p className='metric-icon__text'>{text}</p>
		</div>
	)
}

export default MetricIcon