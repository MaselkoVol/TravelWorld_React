import React, { useEffect, useMemo, useRef, useState } from 'react'
import "./FeaturedTours.scss";
import SectionHeader from '../UI/sectionHeader/SectionHeader';
import CollageImage from '../UI/collageImage/CollageImage';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import Slider from '../UI/slider/Slider';
import { PhotoAPI } from '../../apis/photoAPI';
import { useFetching } from '../../hooks/useFetching';
import SkeletonElement from '../UI/skeletonElement/SkeletonElement';
type Props = {
	className?: string
}

type ImageType = {
	title: string,
	description: string,
	src: string,
}

const imagesObjects = [
	{
		title: "Big Ben",
		description: "London",
	},
	{
		title: "Bali",
		description: "Indonesia",
	},
	{
		title: "Sydney",
		description: "Australia",
	},
	{
		title: "Dubai",
		description: "UAE",
	},
	{
		title: "Phetchabun",
		description: "THAILAND",
	},
	{
		title: "Paris",
		description: "FRANCE",
	},
	{
		title: "Wuxi",
		description: "CHINA",
	},

];

function FeaturedTours({ className }: Props) {
	const [isMobile, isMobileRef] = useMediaQuery("(max-width: 768px)");

	const [images, setImages] = useState<ImageType[] | null>();
	const [collageImages, setCollageImages] = useState<React.ReactElement[] | null>(null);
	const [collageImagesBig, setCollageImagesBig] = useState<React.ReactElement[] | null>(null);



	const [getImages, isImagesLoading, error] = useFetching(async () => {
		const images = await Promise.all(imagesObjects.map((image) => {
			return PhotoAPI.fetchPhotos({
				query: image.title + " " + image.description,
				page: Math.round(Math.random() * 20),
				amount: 1,
				orientation: (image.title === "Sydney" && !isMobileRef.current) ? "landscape" : "portrait",
				size: "medium",
			})
		}))

		const finalImages = imagesObjects.map((image, idx) => {
			return {
				title: image.title,
				description: image.description,
				src: images[idx].photos[0].src.large,
			}
		});
		setImages(finalImages);

	}, true);


	useEffect(() => {
		if (!images) return;
		if (isMobileRef.current) {
			setCollageImages(images.map((image, idx) => (
				<CollageImage hasScrollAnimation={true} key={idx} src={image.src} title={image.title} text={image.description} className={`featured-tours__image-slider`} />
			)));
		} else {
			setCollageImagesBig(images.map((image, idx) => (
				<CollageImage hasScrollAnimation={true} key={idx} src={image.src} title={image.title} text={image.description} className={`featured-tours__image featured-tours__image_${idx + 1}`} />
			)))
		}

	}, [images]);

	useEffect(() => {
		getImages();
	}, []);





	return (
		<div className='container'>
			<div className={`featured-tours ${className ? className : ""}`}>
				<SectionHeader title="Explore" text='Our featured tours' />

				{isMobile ?
					< div className='featured-tours__slider'>
						{(isImagesLoading || !collageImages) ?
							<SkeletonElement className={`featured-tours__image-slider_skeleton`} />
							:
							<Slider gap={15} elements={collageImages} elemMinWidth={200} />
						}
					</div>
					:
					<div className='featured-tours__collage'>
						{(isImagesLoading || !collageImagesBig) ?
							(Array.from({ length: 7 }, (_, idx) => (
								<SkeletonElement key={idx} className={`featured-tours__image_skeleton featured-tours__image_${idx + 1}`} />
							)))
							:
							collageImagesBig
						}
					</div>
				}
			</div>
		</div >
	)
}

export default FeaturedTours