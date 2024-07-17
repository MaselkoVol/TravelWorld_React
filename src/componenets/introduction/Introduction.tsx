import React, { useEffect, useRef, useState } from 'react'
import "./Introduction.scss";
import ImageSkeleton from '../UI/Image/ImageSkeleton';
import FakeSearchBar from '../UI/fakeSearchBar/FakeSearchBar';
import { useFetching } from '../../hooks/useFetching';
import { PhotoAPI } from '../../apis/photoAPI';
type Props = {}

function Introduction({ }: Props) {
	const [photos, setPhotos] = useState(["", "", ""]);
	const [getPhotos, isPhotosLoading, error] = useFetching(async () => {
		const photosRes = await PhotoAPI.fetchPhotos({
			query: "a hiker standing on a mountain ridge above the clouds, an aerial view of a coastal fortress on a small island, and a person in front of the Louvre Pyramid in Paris.",
			page: Math.round(Math.random() * 20),
			amount: 3,
			orientation: "portrait",
			size: "medium"
		});
		setPhotos(photosRes.photos.map(photo => photo.src.medium));
	}, true);

	useEffect(() => {
		getPhotos();
	}, []);

	return (
		<section className='introduction-section'>
			<div className='container'>
				<div className='introduction-section__container'>

					<div className='introduction-section__content'>
						<div className='introduction-section__sub-title'><h3 className='_filled-text-orange'>Know Before You Go</h3> <span>🌍</span></div>
						<h2 className='introduction-section__title'>Traveling opens the door to
							creating <span className='_colored-orange'>memories</span></h2>
						<p className='introduction-section__text'>Discover new horizons, explore breathtaking landscapes, and immerse yourself in diverse cultures. Adventure awaits as you embark on journeys that will leave you with unforgettable stories and cherished experiences.</p>
					</div>

					<div className='introduction-section__images _scroll-animation-once'>
						<ImageSkeleton className='introduction-section__image introduction-section__image_1' src={photos[0]} alt='intro image' />
						<ImageSkeleton className='introduction-section__image introduction-section__image_2' src={photos[1]} alt='intro image' />
						<ImageSkeleton className='introduction-section__image introduction-section__image_3' src={photos[2]} alt='intro image' />
					</div>

				</div>

				<FakeSearchBar />
			</div>
		</section>
	)
}

export default Introduction