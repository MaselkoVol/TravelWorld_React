import React from 'react'
import "./Gallery.scss";
import SectionHeader from '../UI/sectionHeader/SectionHeader';
import CollageImage from '../UI/collageImage/CollageImage';
type Props = {
	className?: string
}

function Gallery({ className }: Props) {

	const images = [
		require("../../utils/images/png/tourist 2.png"),
		require("../../utils/images/png/tourist 2.png"),
		require("../../utils/images/png/tourist 2.png"),
		require("../../utils/images/png/tourist 2.png"),

		require("../../utils/images/png/tourist 2.png"),
		require("../../utils/images/png/tourist 2.png"),
		require("../../utils/images/png/tourist 2.png"),
		require("../../utils/images/png/tourist 2.png"),
	];

	return (
		<div className='container'>
			<div className={`gallery-section ${className ? className : ""}`}>
				<SectionHeader title='Gallery' text='Visit our customers tour gallery' />

				<div className='gallery-section__collage'>
					{images.map((image, idx) => (
						<CollageImage key={idx} src={image} className={`gallery-section__image gallery-section__image_${idx + 1} _scroll-animation-once`} />
					))}
				</div>
			</div>
		</div>
	)
}

export default Gallery