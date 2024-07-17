import React, { useEffect } from 'react'
import "./Image.scss";


type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	className?: string,
	imgFit?: "cover" | "contain",
}

const Image = ({ className, imgFit = "cover", src, ...imgAttributes }: Props) => {

	return (
		<div className={`image ${className ? className : ""}`}>
			< img
				loading='lazy'
				src={src}
				{...imgAttributes}
				className='image__content'
				style={{ objectFit: imgFit }}
			/>
		</div>
	)
}

export default Image;