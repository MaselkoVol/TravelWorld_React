import React, { useEffect } from 'react'
import "./GalleryPage.scss";
import { Link } from 'react-router-dom';
import { useHeaderType } from '../../App';
import Banner from '../../componenets/banner/Banner';
import SearchSection from '../../componenets/searchSection/SearchSection';
import OurGallery from '../../componenets/ourGallery/OurGallery';
import Subscribe from '../../componenets/subscribe/Subscribe';
import useScrollAnimation from '../../context/scrollAnimation/useScrollAnimation';
import useScrollAnimationOnce from '../../context/scrollAnimationOnce/useScrollAnimationOnce';
type Props = {}

function GalleryPage({ }: Props) {
	useScrollAnimationOnce();
	const setHeaderType = useHeaderType();
	useEffect(() => {
		setHeaderType("all");
	}, [])
	return (
		<div>
			<Banner text={"Our Gallery"} colorTextIndexes={[0]} />
			<SearchSection className='gallery-page__search' />
			<OurGallery className='gallery-page__gallery' />
			<Subscribe animated={false} />
		</div>
	)
}

export default GalleryPage