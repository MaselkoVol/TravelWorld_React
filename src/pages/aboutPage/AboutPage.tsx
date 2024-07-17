import React, { useEffect, useState } from 'react'
import "./AboutPage.scss";
import { useHeaderType } from '../../App';
import Slider from '../../componenets/UI/slider/Slider';
import Image from '../../componenets/UI/Image/Image';
import Banner from '../../componenets/banner/Banner';
import About from '../../componenets/about/About';
import Service from '../../componenets/service/Service';
import useScrollAnimationOnce from '../../context/scrollAnimationOnce/useScrollAnimationOnce';
import useScrollAnimation from '../../context/scrollAnimation/useScrollAnimation';
import Subscribe from '../../componenets/subscribe/Subscribe';
type Props = {}

function AboutPage({ }: Props) {

	useScrollAnimationOnce();

	const setHeaderType = useHeaderType();
	useEffect(() => {
		setHeaderType("all");
	}, [])
	return (
		<div className='about-page'>
			<Banner text='About Us' colorTextIndexes={[1]} />
			<About className='about-page__about' />
			<Service isAnimated={false} className='about-page__service' />
			<Subscribe className='about-page__subscribe' />
		</div>
	)
}

export default AboutPage