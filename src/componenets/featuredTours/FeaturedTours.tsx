import React from 'react'
import "./FeaturedTours.scss";
import SectionHeader from '../UI/sectionHeader/SectionHeader';
import CollageImage from '../UI/collageImage/CollageImage';
type Props = {
	className?: string
}

function FeaturedTours({className}: Props) {

	const images = [
		{
			title: "Big Ben",
			description: "London",
			src: require("../../utils/images/png/tourist 2.png"),
		},
		{
			title: "Bali",
			description: "Indonesia",
			src: require("../../utils/images/png/tourist 2.png"),
		},
		{
			title: "Sydney",
			description: "Australia",
			src: require("../../utils/images/png/tourist 2.png"),
		},
		{
			title: "Dubai",
			description: "UAE",
			src: require("../../utils/images/png/tourist 2.png"),
		},
		{
			title: "Phetchabun",
			description: "THAILAND",
			src: require("../../utils/images/png/tourist 2.png"),
		},
		{
			title: "Paris",
			description: "FRANCE",
			src: require("../../utils/images/png/tourist 2.png"),
		},
		{
			title: "Wuxi",
			description: "CHINA",
			src: require("../../utils/images/png/tourist 2.png"),
		},

	];

	return (
		<div className='container'>
			<div className={`featured-tours ${className ? className : ""}`}>
				<SectionHeader title="Explore" text='Our featured tours' />
				<div className='featured-tours__collage'>
					{images.map((image, idx) => (
						<CollageImage key={idx} src={image.src} title={image.title} text={image.description} className={`featured-tours__image featured-tours__image_${idx + 1} _scroll-animation-once`} />
					))}
				</div>
			</div>
		</div>
	)
}

export default FeaturedTours