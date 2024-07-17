import React from 'react'
import "./Comment.scss";
import Image from '../UI/Image/Image';
import ImageSkeleton from '../UI/Image/ImageSkeleton';

type Props = {
	text: string,
	imgSrc: string,
	name: string,
	role: string,
	className?: string,
}

const Comment = ({ text, imgSrc, name, role, className }: Props) => {
	return (
		<div className={`user-comment ${className ? className : ""}`}>
			<p className='user-comment__text'>{text}</p>
			<div className='user-comment__user'>
				<ImageSkeleton className="user-comment__image" src={imgSrc} />
				<div className='user-comment__user-info'>
					<h4 className='user-comment__name'>{name}</h4>
					<p className='user-comment__role'>{role}</p>
				</div>
			</div>
		</div>
	)
}

export default Comment