import React from 'react'
import "./Link.scss";
import { Link } from 'react-router-dom';
type Props = {
	children?: React.ReactNode,
	className?: string,
}
type FinalProps =
	| Props & { to: string, href?: string }
	| Props & { to?: string, href: string }


function IconLink({ children, className, to, href }: FinalProps) {
	if (to) {
		return <Link to={to} className={`link-icon ${className ? className : ""}`} > {children}</Link >
	}
	return <a href={href} className={`link-icon ${className ? className : ""}`}>{children}</a>
}

export default IconLink;