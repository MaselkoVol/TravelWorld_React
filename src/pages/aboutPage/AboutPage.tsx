import React, { useEffect, useState } from 'react'
import "./AboutPage.scss";
import { useHeaderType } from '../../App';
import Slider from '../../componenets/UI/slider/Slider';
import Image from '../../componenets/UI/Image/Image';
type Props = {}

function AboutPage({ }: Props) {

	let images = [
		"https://upload.wikimedia.org/wikipedia/commons/c/c5/Mossekanalen_01_480px.JPG",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi24LRbZzDiUV9e-OT-_mh3bIPmNgULpfhgw&s",
		"https://www.pro-of.com.ua/wp-content/uploads/2020/09/480px-Ananas_comosus_MS_4035.jpg",
		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",

		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQintu2fjWqD5eysP8fmAJJJFYQ-Xr2aNjCOA&s",
		"https://i.pinimg.com/736x/e1/70/92/e170923087455c1193495de3c4d3cb65.jpg",
		"https://visafoto.com/img/docs/bs_passport_480x640.jpg",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk4Uuu9zuGT9Zs2zvEwNtq9RV41NR3hP25sg&s",

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
			<Slider gap={10} elements={imageElements} elemMinWidth={300} />
		</div>
	)
}

export default AboutPage