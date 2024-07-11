import React, { useEffect } from 'react'
import "./HomePage.scss";
import { useHeaderType } from '../../App';
import Introduction from '../../componenets/introduction/Introduction';
import useScrollAnimationOnce from '../../hooks/useScrollAnimationOnce';
import Service from '../../componenets/service/Service';
import FeaturedTours from '../../componenets/featuredTours/FeaturedTours';
import Experience from '../../componenets/experience/Experience';
import Gallery from '../../componenets/gallery/Gallery';

type Props = {}

function HomePage({ }: Props) {
	const setHeaderType = useHeaderType();

	useScrollAnimationOnce();
	useEffect(() => {
		setHeaderType("all");
	}, [])
	return (
		<div>
			<Introduction />
			<Service className='home-page__service'/>
			<FeaturedTours className='home-page__featured-tours'/>
			<Experience className='home-page__experience'/>
			<Gallery className='home-page__gallery' />
			<div style={{height: "2000px", width: "200px", backgroundColor:"blue"}}></div>
		</div>
	)
}

export default HomePage