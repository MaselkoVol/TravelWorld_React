import React, { useEffect, useRef, useState } from 'react'
import "./Image.scss";
import { setCSSVariable } from '../../../utils/functions';
import { useIsImageLoaded } from '../../../hooks/useIsImageLoaded';
import { useInitializeCSSVariable } from '../../../hooks/useInitializeCSSVariable';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	className?: string,
	imgFit?: "cover" | "contain",
	skeletonColor?: string,
	smallResolutionSrc?: string, 
}

const ImageSkeleton = ({ className, imgFit = "cover", src, skeletonColor, ...imgAttributes }: Props) => {
	const imgLoaded = useIsImageLoaded(src);
	const skeletonElementRef = useRef(null);
	useInitializeCSSVariable(skeletonElementRef, "--skeleton-color", skeletonColor);

	return (
		<div className={`image image-skeleton ${className ? className : ""} ${!imgLoaded ? "isLoading" : ""}`}>
			{imgLoaded
				?
				< img
					loading='lazy'
					src={src}
					{...imgAttributes}
					className='image__content'
					style={{ objectFit: imgFit }} />
				:
				<div ref={skeletonElementRef} className='image__content-skeleton' ></div>
			}
		</div>
	)
}

export default ImageSkeleton;