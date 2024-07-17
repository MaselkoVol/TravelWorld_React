import React from 'react'
import "./FakeSearchBar.scss";
type Props = {
	className?: string,
}

function FakeSearchBar({ className }: Props) {
	return (
		<div className={`fake-searchbar ${className ? className : ""}`}>
			<div className="fake-searchbar__container">

				<div className='fake-searchbar__item-container'>
					<i className='icon-location fake-searchbar__icon'></i>
					<div className='fake-searchbar__content'>
						<h3 className='fake-searchbar__title'>Location</h3>
						<p className='fake-searchbar__text'>Where are you going?</p>
					</div>
				</div>

				<div className='fake-searchbar__item-container fake-searchbar__item-container_mid'>
					<i className='icon-distance fake-searchbar__icon'></i>
					<div className='fake-searchbar__content'>
						<h3 className='fake-searchbar__title'>Distance</h3>
						<p className='fake-searchbar__text'>Distance k/m</p>
					</div>
				</div>

				<div className='fake-searchbar__item-container fake-searchbar__item-container_last'>
					<i className='icon-avatar fake-searchbar__icon'></i>
					<div className='fake-searchbar__content'>
						<h3 className='fake-searchbar__title'>Max People</h3>
						<p className='fake-searchbar__text'>0</p>
					</div>
				</div>

				<div className='fake-searchbar__search'>
					<i className='icon-search fake-searchbar__search-icon'></i>
				</div>

			</div>
		</div>
	)
}

export default FakeSearchBar