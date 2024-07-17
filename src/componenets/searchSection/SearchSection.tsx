import React from 'react'
import "./SearchSection.scss";
import FakeSearchBar from '../UI/fakeSearchBar/FakeSearchBar';
type Props = {
	className?: string,
}

function SearchSection({ className }: Props) {
	return (
		<div className={`search-section ${className ? className : ""}`}>
			<div className='container'>
				<div className='search-section__container'>
					<FakeSearchBar className='search-section__search' />
					<img className='search-section__image' src={require("../../utils/images/png/plane.png")}></img>
				</div>
			</div>
		</div>
	)
}

export default SearchSection