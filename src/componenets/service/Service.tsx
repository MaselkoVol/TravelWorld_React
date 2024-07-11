import React from 'react'
import "./Service.scss";
import TextCard from '../UI/textCard/TextCard';
type Props = {
	className?: string,
}

function Service({ className }: Props) {

	const textCards = [
		{
			icon: "icon-weather",
			title: "Calculate Weather",
			text: "Lorem ipsum dolor sit amet, adipisicing elit.",
		},
		{
			icon: "icon-guide",
			title: "Best Tour Guide",
			text: "Lorem ipsum dolor sit amet, adipisicing elit.",
		}, {
			icon: "icon-customization",
			title: "Customization",
			text: "Lorem ipsum dolor sit amet, adipisicing elit.",
		}
	] as const;

	return (
		<div className='container'>
			<div className={`service-section ${className ? className : ""}`}>
				<div className='service-section__header'>
					<h3 className="service-section__sub-title">What we serve</h3>
					<h2 className='service-section__title'>We offer out best services</h2>
				</div>

				<div className='service-section__content _scroll-animation-once'>
					{textCards.map((card, idx) => (
						<TextCard className={`service-section__text-card service-section__text-card_${idx}`} key={idx} title={card.title} text={card.text} iconClass={card.icon} />
					))}

				</div>
			</div>
		</div>
	)
}

export default Service