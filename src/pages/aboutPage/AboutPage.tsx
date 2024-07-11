import React, { useEffect } from 'react'
import "./AboutPage.scss";
import { useHeaderType } from '../../App';
import Slider from '../../componenets/UI/slider/Slider';
import Image from '../../componenets/UI/Image/Image';
type Props = {}

function AboutPage({ }: Props) {

	let images = [
		"https://images.pexels.com/photos/3680219/pexels-photo-3680219.jpeg?cs=srgb&dl=pexels-lukas-rodriguez-1845331-3680219.jpg&fm=jpg",
		"https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg",
		"https://cdn.pixabay.com/photo/2023/12/06/21/07/photo-8434386_1280.jpg",
		"https://wallpapers.com/images/featured/hd-a5u9zq0a0ymy2dug.jpg",

		"https://static.vecteezy.com/system/resources/thumbnails/036/135/743/small_2x/ai-generated-colored-water-drops-on-abstract-background-water-drops-on-colorful-background-colored-wallpaper-ultra-hd-colorful-wallpaper-background-with-colored-bubbles-photo.jpg",
		"https://wallpapers.com/images/hd/best-hd-autumn-leaves-57tbt9tq3xf3vdm2.jpg",
		"https://images.pexels.com/photos/1563355/pexels-photo-1563355.jpeg?cs=srgb&dl=pexels-thatguycraig000-1563355.jpg&fm=jpg",
		"https://static.vecteezy.com/system/resources/previews/030/355/618/non_2x/flowers-in-the-field-mountains-flowers-nature-nature-hd-wallpaper-ai-generated-free-photo.jpg",

	];
	const imageElements = images.map((image, idx) => (
		<Image key={idx} src={image} className='about-page__image' />
	));

	const setHeaderType = useHeaderType();
	useEffect(() => {
		setHeaderType("all");
	}, [])
	return (
		<div className='container'>

			<Slider gap={45} elements={imageElements} elemMinWidth={300} />
		</div>
	)
}

export default AboutPage