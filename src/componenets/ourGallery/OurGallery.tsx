import React, { useEffect, useRef, useState } from 'react'
import "./OurGallery.scss";
import PaginationGallery from '../paginationGallery/PaginationGallery';
import { PhotoAPI } from '../../apis/photoAPI';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useFetching } from '../../hooks/useFetching';
import PaginationGallarySkeleton from '../paginationGallery/PaginationGallerySkeleton';
import PaginationButton from '../UI/button/PaginationButton';
import Loader from '../UI/loader/Loader';
type Props = {
	className: string,
}

function OurGallery({ className}: Props) {
	const [isMobile, isMobileRef] = useMediaQuery("(max-width: 768px)");

	const [imageArr, setImageArr] = useState<React.ReactElement[] | null>(null);
	const [nextImages, setNextImages] = useState<string[] | null>(null);
	const totalNumberOfImages = useRef(0);
	const [isImagesOver, setIsImagesOver] = useState(false);

	const [getNextImages, isImgLoading, error] = useFetching(async (page: number) => {
		const images = await PhotoAPI.fetchPhotos({
			query: "stunning images of famous landmarks and destinations from around the world, including Dubai, UAE; Bali, Indonesia; Sydney, Australia; Yogyakarta, Indonesia; Beijing, China; Big Ben in London, UK; Paris, France; beaches in the Maldives; Phi Phi Island in Thailand; and El Nido in the Philippines.",
			amount: 10,
			page: page,
			orientation: "square",
		})
		totalNumberOfImages.current = images.total_results;
		setNextImages(images.photos.map(photo => isMobileRef.current ? photo.src.medium : photo.src.large));
	}, true)

	function loadMore() {
		if (!imageArr) return;
		getNextImages(imageArr.length + 1);
	}

	useEffect(() => {
		if (!imageArr) return;
		if (totalNumberOfImages.current - imageArr.length * 10 < 10) {
			setIsImagesOver(true);
		}
	}, [imageArr]);

	useEffect(() => {
		if (!nextImages) return;
		if (!imageArr) {
			setImageArr([<PaginationGallery key={1} srcArr={nextImages} />]);
		} else {
			setImageArr([...imageArr, <PaginationGallery className="our-gallery__item-gap" key={imageArr.length + 1} srcArr={nextImages} />]);
		}

	}, [nextImages])

	useEffect(() => {
		getNextImages(1);
	}, [])
	return (
		<div className='container'>
			<div className={`our-gallery ${className}`}>
				<h2 className='our-gallery__title'>Best Tour <span className='_colored-orange'>Galary</span></h2>
				{imageArr ?
					imageArr
					:
					<PaginationGallarySkeleton />
				}
				{isImagesOver ? ""
					:
					isImgLoading ?
						<Loader className='our-gallery__loader' />
						:
						// <Loader className='our-gallery__loader'/>
						<PaginationButton className='our-gallery__button' onClick={loadMore}>Load More</PaginationButton>
				}
			</div>
		</div>
	)
}

export default OurGallery