import React from 'react'
import "./FooterAccordeon.scss";
type Props = {
	title: string,
	children: React.ReactNode,
	contentClassName?: string,
	className?: string,
}

function FooterAccordeon({ title, children, contentClassName, className }: Props) {

	const handleListTitleClick = function (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) {
		const text = e.currentTarget;
		const li = text.parentElement;
		const body = li?.nextElementSibling;
		if (body?.classList.contains("_active")) {
			text?.classList.remove("_active")
			body?.classList.remove("_active")
		} else {
			text?.classList.add("_active")
			body?.classList.add("_active")
		}
	}

	return (
			<ul className={`footer-accordeon ${className ? className : ""}`}>
				<li><h2 className='footer-accordeon__title' onClick={handleListTitleClick}>{title}</h2></li>
				<div className='footer-accordeon__body'>
					<div className={`footer-accordeon__content ${contentClassName ? contentClassName : ""}`}>
						{children}
					</div>
				</div>
			</ul>
	)
}

export default FooterAccordeon