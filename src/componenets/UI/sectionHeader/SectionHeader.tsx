import React from 'react'
import "./SectionHeader.scss";
type Props = {
	title: string,
	text: string,
}

function SectionHeader({title, text}: Props) {
	return (
		<div className='section-header'>
			<h2 className='section-header__title _filled-text-orange'>{title}</h2>
			<p className='section-header__text'>{text}</p>
		</div>
	)
}

export default SectionHeader