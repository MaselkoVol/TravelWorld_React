import React, { useEffect, useState } from 'react'
import Logo from '../UI/logo/Logo'
import { NavLink } from 'react-router-dom'
import "./Footer.scss";
import FooterAccordeon from '../UI/footerAccordeon/FooterAccordeon';
import { Link } from 'react-router-dom';
type Props = {}

function Footer({ }: Props) {
	const [isMainItemAppended, setIsMainItemAppended] = useState(true);
	const pageLinks = [
		{ name: "Home", to: "/" },
		{ name: "About", to: "/about" },
		{ name: "Tours", to: "/tours" },
	] as const;

	const authorizationLinks = [
		{ name: "Gallery", to: "/gallery " },
		{ name: "Login", to: "/login" },
		{ name: "Register", to: "/register" },
	] as const;

	const resizeFooter = function () {
		if (window.innerWidth <= 960 && isMainItemAppended) {
			const footerContainer = document.querySelector(".footer__container");
			const mainItem = document.querySelector(".footer__item_main");
			if (mainItem && footerContainer) {
				footerContainer.prepend(mainItem);
				setIsMainItemAppended(false);
			}
		}
		if (window.innerWidth > 960 && !isMainItemAppended) {
			const footerLists = document.querySelector(".footer__lists");
			const mainItem = document.querySelector(".footer__item_main");
			if (mainItem && footerLists) {
				footerLists.prepend(mainItem);
				setIsMainItemAppended(true);
			}
		}
	}
	window.addEventListener("resize", resizeFooter);
	useEffect(() => {
		
		resizeFooter();
	}, [])

	return (
		<div className='footer'>
			<div className="container">
				<div className="footer__container">

					<div className='footer__lists'>


						<div className='footer__item footer__item_main'>
							<Logo className='footer__logo' />
							<p className='footer__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, enim.</p>
							<div className="footer__icons">
								<a href='https://youtube.com' className='icon-youtube footer__media-icon'></a>
								<a href='https://x.com' className='icon-twitter footer__media-icon'></a>
								<a href='https://facebook.com' className='icon-facebook footer__media-icon'></a>
								<a href='https://instagram.com' className='icon-instagram footer__media-icon'></a>
							</div>
						</div>

						<FooterAccordeon className='footer__accordeon' title='Discover' contentClassName='footer__accordeon-content'>
							{pageLinks.map((link, idx) => (
								<li key={idx}><Link to={link.to} className="footer__link">{link.name}</Link></li>
							))}
						</FooterAccordeon>

						<FooterAccordeon className='footer__accordeon' title='Quick Links' contentClassName='footer__accordeon-content'>
							{authorizationLinks.map((link, idx) => (
								<li key={idx}><Link to={link.to} className="footer__link">{link.name}</Link></li>
							))}
						</FooterAccordeon>

						<FooterAccordeon className='footer__accordeon' title='Contact' contentClassName='footer__accordeon-content'>
							<li className='footer__contacts-list-item'>
							<p><i className='icon-location'></i> Address : </p><span>Lorem</span>
							</li>
							<li className='footer__contacts-list-item'>
								<p><i className='icon-mail'></i> Email : </p><span>xyz@mail.com</span>
							</li>
							<li className='footer__contacts-list-item'>
							<p><i className='icon-phone'></i> Phone : </p><span>00022200222</span>
							</li>
						</FooterAccordeon>

					</div>
					<div className='footer__rights'>
						© 2024 <span className='footer__rights_color'>Vipin_uidesigns</span>. All Rights Reserved
					</div>

				</div>
			</div >
		</div >
	)
}

export default Footer