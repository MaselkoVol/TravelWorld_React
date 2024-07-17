import React, { useEffect, useRef, useState } from 'react'
import ImageSkeleton from '../UI/Image/ImageSkeleton';
import "./PaginationGallery.scss";
import { useScrollAnimationRef } from '../../context/scrollAnimation/useScrollAnimationRef';
type Props = {
	srcArr: string[],
	className?: string,
}

function PaginationGallery({ className, srcArr }: Props) {
	const [images, setImages] = useState<React.ReactElement[] | null>(null);
	const galleryRef = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		setTimeout(()=> {
			galleryRef.current?.classList.add("mounted")
		}, 100)
		setImages(srcArr.map((item, idx) => (
			<PaginationGallaryItem key={idx} src={item} className={`pagination-gallery__item pagination-gallery__item_${idx + 1}`} />
		)))
	}, [])
	return (
		<div ref={galleryRef} className={`pagination-gallery pagination-gallery_init-animation ${className ? className : ""}`}>{images}</div>
	)
}

type ItemProps = {
	src?: string,
	className?: string
}

function PaginationGallaryItem({ src, className }: ItemProps) {
	const itemRef = useRef<HTMLDivElement | null>(null);
	useScrollAnimationRef(itemRef);
	return (
		<div ref={itemRef} className={className}>
			<ImageSkeleton src={src} className='pagination-gallery__image' />
		</div>
	)
}

export default PaginationGallery