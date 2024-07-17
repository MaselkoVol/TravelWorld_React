import React, { useEffect } from 'react'
import "./HomePage.scss";
import { useHeaderType } from '../../App';
import Introduction from '../../componenets/introduction/Introduction';
import Service from '../../componenets/service/Service';
import FeaturedTours from '../../componenets/featuredTours/FeaturedTours';
import Experience from '../../componenets/experience/Experience';
import Gallery from '../../componenets/gallery/Gallery';
import Feedback from '../../componenets/feedback/Feedback';
import Subscribe from '../../componenets/subscribe/Subscribe';
import useScrollAnimation from '../../context/scrollAnimationOnce/useScrollAnimationOnce';
import SplashScreen from '../splashScreen/SplashScreen';

type Props = {}

function HomePage({ }: Props) {
	const setHeaderType = useHeaderType();

	useScrollAnimation();

	useEffect(() => {
		setHeaderType("all");
	}, [])
	return (
		<div>
			<Introduction />
			<Service className='home-page__service' />
			<FeaturedTours className='home-page__featured-tours' />
			<Experience className='home-page__experience' />
			<Gallery className='home-page__gallery' />
			<Feedback className='home-page__gallery' />
			<Subscribe />
		</div>
	)
}

export default HomePage