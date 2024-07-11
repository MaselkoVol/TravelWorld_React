import React from 'react'
import "./CollageImage.scss";
import Image from '../Image/Image'
type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
	className?: string,
	imageClass?: string,
	title?: string,
	text?: string,
}


function CollageImage({ className, imageClass, title, text, ...props }: Props) {
	return (
		<div onClick={(e)=>{e.currentTarget.classList.toggle("_active")}} className={`collage-image ${className ? className : ""} ${title ? "dark-image" : "light-image"}`}>
			<Image className={`collage-image__img ${imageClass ? imageClass : ""}`} {...props} />
			{text && (
				<div className={`collage-image__description`}>
					<h3 className='collage-image__title'>{title}</h3>
					<h3 className='collage-image__text'>{text.toUpperCase()}</h3>
				</div>
			)}
		</div>
	)
}

export default CollageImage