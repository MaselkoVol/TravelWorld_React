import React, { useRef } from 'react'
import "./SplashScreen.scss";
import useScrollAnimation from '../../context/scrollAnimationOnce/useScrollAnimationOnce';
type Props = {
	color?: string
}

function SplashScreen({color}: Props) {
	return (
		<div className='splash-screen'>
			<div className='splash-screen__loader'></div>
		</div>
	)
}

export default SplashScreen