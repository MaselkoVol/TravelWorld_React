import React, { useEffect, useState } from 'react'
import "./About.scss";
import { useFetching } from '../../hooks/useFetching';
import { PhotoAPI } from '../../apis/photoAPI';
import SkeletonElement from '../UI/skeletonElement/SkeletonElement';
import ImageSkeleton from '../UI/Image/ImageSkeleton';
import { useMediaQuery } from '../../hooks/useMediaQuery';
type Props = {
	className?: string,
}

function About({ className }: Props) {
	const [isMobile, isMobileRef] = useMediaQuery("(max-width: 1050px)");

	const [image, setImage] = useState<string | null>(null);
	const [getImage, isImgLoading, error] = useFetching(async () => {
		const image = await PhotoAPI.fetchPhotos({
			query: "picturesque scene of a narrow bay or lagoon surrounded by tall, steep cliffs covered in lush greenery.",
			amount: 1,
			page: Math.round(Math.random() * 20),
			size: "medium",
			orientation: "landscape",
		})

		setImage(image.photos[0].src.medium);
	})

	useEffect(() => {
		if (!isMobileRef.current) {
			getImage();
		}
	}, [])

	return (
		<div className='container'>
			<div className={`about-section ${className ? className : ""}`}>
				<div className='about-section__content'>

					<div className='about-section__block about-section__block_1 _scroll-animation-once'>
						<h2 className='about-section__title'>Who <span className='_colored-orange'>We Are</span></h2>
						<p className='about-section__text'>We’re all about creating unforgettable experiences for our
							guests. Our journey began with a simple passion for
							exploring the beauty of the World.</p>
					</div>

					<div className='about-section__block about-section__block_2 _scroll-animation-once'>
						<h2 className='about-section__title'>Our <span className='_colored-orange'>Mission</span></h2>
						<p className='about-section__text'>We believe that travel is not just about visiting new places,
							but about immersing yourself in new cultures, connecting
							with nature, and making memories that last a lifetime.</p>
					</div>

				</div>

				{!isMobileRef.current && ((isImgLoading || !image) ?
					<SkeletonElement className='about-section__skeleton' />
					:
					<ImageSkeleton className='about-section__image' src={image} />)
				}
			</div>
		</div>
	)
}

export default About