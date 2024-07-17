import React from 'react'
import "./Subscribe.scss";
import Image from '../UI/Image/Image';
import SubmitInput from '../UI/submitInput/SubmitInput';

type Props = {
	className?: string,
	animated?: boolean,
}

const Subscribe = ({ className, animated = true }: Props) => {
	return (
		<div className={`subscribe-section ${className ? className : ""}`}>
			<div className='container'>
				<div className='subscribe-section__container'>
					<div className='subscribe-section__content'>
						<h2 className='subscribe-section__title'>Subscribe now to get useful traveling
							information</h2>
						<SubmitInput className={`subscribe-section__input ${animated ? "_scroll-animation-once" : ""}`}></SubmitInput>
						<p className='subscribe-section__text'>Enter your email to unlock travel secrets, exclusive deals, and expert tips delivered straight to your inbox!</p>
					</div>

					<Image src={require("../../utils/images/png/tourist 2.png")} className="subscribe-section__image _scroll-animation"></Image>
				</div>
			</div>
		</div>
	)
}

export default Subscribe