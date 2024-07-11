import React from 'react'
import "./Introduction.scss";
import Image from '../UI/Image/Image';
import FakeSearchBar from '../UI/fakeSearchBar/FakeSearchBar';
type Props = {}

function Introduction({ }: Props) {


	return (
		<section className='introduction-section'>
			<div className='container'>
				<div className='introduction-section__container'>

					<div className='introduction-section__content'>
						<div className='introduction-section__sub-title'><h3 className='_filled-text-orange'>Know Before You Go</h3> <span>🌍</span></div>
						<h2 className='introduction-section__title'>Traveling opens the door to
							creating <span className='_colored-orange'>memories</span></h2>
						<p className='introduction-section__text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam ipsum nobis  asperiores soluta voluptas quas voluptates. Molestiae tempora dignissimos, animi praesentium molestias perferendis porro expedita delectus. Soluta natus porro.</p>
					</div>

					<div className='introduction-section__images _scroll-animation-once'>
						<Image className='introduction-section__image introduction-section__image_1' src={require('../../utils/images/png/logo.png')} alt='intro image' />
						<Image className='introduction-section__image introduction-section__image_2' src={require('../../utils/images/png/logo.png')} alt='intro image' />
						<Image className='introduction-section__image introduction-section__image_3' src={require('../../utils/images/png/logo.png')} alt='intro image' />
					</div>

				</div>

				<FakeSearchBar />
			</div>
		</section>
	)
}

export default Introduction