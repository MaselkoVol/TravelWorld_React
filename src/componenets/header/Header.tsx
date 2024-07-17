import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { HeaderType } from '../../utils/types'
import "./Header.scss";
import Logo from '../UI/logo/Logo';
import useScrollAnimationOnce from '../../context/scrollAnimationOnce/useScrollAnimationOnce';

type Props = {
	type: HeaderType,
}


function Header({ type = "all" }: Props) {
	useScrollAnimationOnce();

	const headerContainer = useRef<HTMLDivElement>(null);

	const handleLinkClick = function () {
		document.documentElement.scrollTop = 0;
		handleIconClick();
	}

	const handleIconClick = function () {
		if (headerContainer.current === null) return;
		const container = headerContainer.current;
		if (container.classList.contains("_active")) {
			container.classList.remove("_active");
		} else {
			container.classList.add("_active");
		}

	}

	const pageLinks = [
		{ name: "Home", to: "/" },
		{ name: "About", to: "/about" },
		{ name: "Gallery", to: "/gallery" },
	] as const;

	const authorizationLinks = [
		{ name: "Login", to: "/login" },
		{ name: "Register", to: "/register" },
	] as const;

	return (
		<div className='header'>
			<div className='container'>
				<div ref={headerContainer} className='header__container'>
					<Logo className='header__logo _scroll-animation-once' />

					<nav className='header__menu'>
						<div className="header__menu-back"></div>
						<ul className={`header__list header__list_pages ${type}`}>
							{pageLinks.map((link, idx) => (
								<li key={idx}><NavLink onClick={handleLinkClick} to={link.to} className={({ isActive }) => `header__link ${isActive ? "isActive" : ""}`}>{link.name}</NavLink></li>
							))}

						</ul>
						<ul className={`header__list header__list_authorization ${type}`}>
							{authorizationLinks.map((link, idx) => (
								<li key={idx}><NavLink onClick={handleLinkClick} to={link.to} className={({ isActive }) => `header__link ${isActive ? "isActive" : ""}`}>{link.name}</NavLink></li>
							))}
						</ul>
					</nav>
					<div onClick={handleIconClick} className='header__close-area'></div>

					<div onClick={handleIconClick} className={`header__icon ${type}`}>
						<span></span>
					</div>

				</div>
			</div>
		</div>
	)
}

export default Header