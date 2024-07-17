import React, { forwardRef, useEffect, useRef } from 'react'
import "./CollageImage.scss";
import ImageSkeleton from '../Image/ImageSkeleton';
import useScrollAnimation from '../../../context/scrollAnimation/useScrollAnimation';
import { useScrollAnimationRef } from '../../../context/scrollAnimation/useScrollAnimationRef';
type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	className?: string,
	imageClass?: string,
	title?: string,
	text?: string,
	animated?: boolean,
	hasScrollAnimation?: boolean,
}


const CollageImage = ({ className, imageClass, title, text, hasScrollAnimation, animated = false, ...props }: Props) => {
	const collageImageRef = useRef<HTMLDivElement | null>(null);
	useScrollAnimationRef(hasScrollAnimation ? collageImageRef : null);

	return (
		<div ref={collageImageRef} onClick={(e) => { e.currentTarget.classList.toggle("_active") }} className={`collage-image ${className ? className : ""} ${title ? "dark-image" : "light-image"}`}>
			<ImageSkeleton className={`collage-image__img ${imageClass ? imageClass : ""}`} {...props} />
			{text && (
				<div className={`collage-image__description`}>
					<h3 className='collage-image__title'>{title}</h3>
					<h3 className='collage-image__text'>{text.toUpperCase()}</h3>
				</div>
			)}
		</div>
	)
};

export default CollageImage