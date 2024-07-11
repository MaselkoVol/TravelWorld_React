import React, { useEffect } from 'react'
import "./ToursPage.scss";
import { Link } from 'react-router-dom';
import { useHeaderType } from '../../App';
type Props = {}

function ToursPage({}: Props) {
	const setHeaderType = useHeaderType();
	useEffect(() => {
		setHeaderType("all");
	}, [])
	return (
		<div>
			<Link to="/">Home</Link>
		</div>
	)
}

export default ToursPage