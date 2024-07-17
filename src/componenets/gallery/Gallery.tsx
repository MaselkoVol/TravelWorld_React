import React, { useEffect, useMemo, useState } from 'react'
import "./Gallery.scss";
import SectionHeader from '../UI/sectionHeader/SectionHeader';
import CollageImage from '../UI/collageImage/CollageImage';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import Slider from '../UI/slider/Slider';
import { useFetching } from '../../hooks/useFetching';
import { PhotoAPI } from '../../apis/photoAPI';
import SkeletonElement from '../UI/skeletonElement/SkeletonElement';
type Props = {
	className?: string
}

function Gallery({ className }: Props) {
	const [isMobile, isMobileRef] = useMediaQuery("(max-width: 768px)");
	const [images, setImages] = useState<string[] | null>(null);
	const [collageImages, setCollageImages] = useState<React.ReactElement[] | null>(null);
	const [collageImagesBig, setCollageImagesBig] = useState<React.ReactElement[] | null>(null);

	const [getImages, isImagesLoading, error] = useFetching(async () => {
		const images = await PhotoAPI.fetchPhotos({
			query: "our customers travelling gallery",
			amount: 8,
			page: Math.round(Math.random() * 20),
			size: "medium",
			orientation: "portrait"
		});
		setImages(images.photos.map(image => image.src.large));
	}, true);

	useEffect(() => {
		if (!images) return;
		if (isMobileRef.current) {
			setCollageImages(images.map((image, idx) => (
				<CollageImage hasScrollAnimation={true} key={idx} src={image} className={`gallery-section__image-slider`} />
			)))
		} else {
			setCollageImagesBig(images.map((image, idx) => (
				<CollageImage hasScrollAnimation={true} key={idx} src={image} className={`gallery-section__image gallery-section__image_${idx + 1} _scroll-animation`} />
			)))
		}
	}, [images]);

	useEffect(() => {
		getImages();
	}, []);

	return (
		<div className='container'>
			<div className={`gallery-section ${className ? className : ""}`}>
				<SectionHeader title='Gallery' text='Visit our customers tour gallery' />

				{(isMobile && collageImages) ?
					<div className='gallery-section__slider'>
						{(isImagesLoading || !collageImages) ?
							<SkeletonElement className={`gallery-section__image-slider_skeleton`} />
							:
							<Slider gap={15} elements={collageImages} elemMinWidth={200} />
						}
					</div>
					:
					<div className='gallery-section__collage'>
						{(isImagesLoading || !collageImagesBig) ?
							Array.from({ length: 8 }, (_, idx) => (
								<SkeletonElement key={idx} className={`gallery-section__image_skeleton gallery-section__image_${idx + 1}`} />
							))
							:
							collageImagesBig
						}
					</div>
				}
			</div>
		</div>
	)
}

export default Gallery