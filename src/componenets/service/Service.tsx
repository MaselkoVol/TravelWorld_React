import React from 'react'
import "./Service.scss";
import TextCard from '../UI/textCard/TextCard';
type Props = {
	className?: string,
	isAnimated?: boolean
}

function Service({ className, isAnimated = true }: Props) {

	const textCards = [
		{
			icon: "icon-weather",
			title: "Calculate Weather",
			text: "Check weather forecasts quickly.",
		},
		{
			icon: "icon-guide",
			title: "Best Tour Guide",
			text: "Explore with expert guides.",
		}, {
			icon: "icon-customization",
			title: "Customization",
			text: "Personalize your travel experience.",
		}
	] as const;

	return (
		<div className='container'>
			<div className={`service-section ${className ? className : ""}`}>
				<div className='service-section__header'>
					<h3 className="service-section__sub-title">What we serve</h3>
					<h2 className='service-section__title'>We offer out best services</h2>
				</div>

				<div className={`service-section__content ${isAnimated ? "_scroll-animation-once" : ""}`}>
					{textCards.map((card, idx) => (
						<TextCard className={`service-section__text-card service-section__text-card_${idx}`} key={idx} title={card.title} text={card.text} iconClass={card.icon} />
					))}

				</div>
			</div>
		</div>
	)
}

export default Service