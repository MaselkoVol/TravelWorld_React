import React, { useEffect } from 'react'
import "./Experience.scss";
import MetricIcon from '../UI/metricIcon/MetricIcon';
import Image from '../UI/Image/Image';
type Props = {
	className?: string
}

function Experience({ className }: Props) {

	return (
		<div className='container'>
			<div className={`experience-section ${className ? className : ""}`}>
				<h3 className='_filled-text-orange experience-section__sub-title'>Experience</h3>
				<h2 className='experience-section__title'>With our all experience will serve you</h2>
				<p className='experience-section__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas aliquam, hic tempora inventore suscipit unde.</p>

				<div className='experience-section__metrics _scroll-animation-once'>
					<MetricIcon title='12k+' text="Successful trip" className='experience-section__metric experience-section__metric_1' />
					<MetricIcon title='2k+' text="Regular clients" className='experience-section__metric experience-section__metric_2' />
					<MetricIcon title='15' text="Year experience" className='experience-section__metric experience-section__metric_3' />
				</div>
				<Image className='experience-section__image' imgFit='contain' src={require("../../utils/images/png/tourist 1.png")} />
			</div>
		</div>
	)
}

export default Experience; 