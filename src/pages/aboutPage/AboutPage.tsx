import React, { useEffect, useState } from 'react'
import "./AboutPage.scss";
import { useHeaderType } from '../../App';
import Slider from '../../componenets/UI/slider/Slider';
import Image from '../../componenets/UI/Image/Image';
type Props = {}

function AboutPage({ }: Props) {

	let images = [
		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",
		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",
		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",
		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",

		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",
		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",
		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",
		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",

	];
	const imageElements = images.map((image, idx) => (
		<Image draggable={false} key={idx} src={image} className='about-page__image' />
	));

	const setHeaderType = useHeaderType();
	useEffect(() => {
		setHeaderType("all");
	}, [])
	return (
		<div className='container'>
			<Slider gap={10} elements={imageElements} amount={3} />
		</div>
	)
}

export default AboutPage