import React, { useState, useEffect } from 'react'
import SkeletonElement from '../UI/skeletonElement/SkeletonElement';
import "./PaginationGallery.scss";
type Props = {}

function PaginationGallerySkeleton({ }: Props) {
	const [images, setImages] = useState<React.ReactElement[] | null>(null);

	useEffect(() => {
		setImages(Array.from({ length: 10 }, (_, idx) => (
			<SkeletonElement key={idx} className={`pagination-gallery__item pagination-gallery__item_${idx + 1}`} />
		)))
	}, [])
	return (
		<div className='pagination-gallery'>{images}</div>
	)
}

export default PaginationGallerySkeleton