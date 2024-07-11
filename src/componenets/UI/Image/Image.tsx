import React from 'react'
import "./Image.scss";


type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	className?: string,
	imgFit?: "cover" | "contain",
}

function Image({className, imgFit = "cover", ...imgAttributes}: Props) {
	return (
		<div className={`image ${className ? className : ""}`}>
			<img {...imgAttributes} className='image__content' style={{objectFit: imgFit}} />
		</div>
	)
}

export default Image