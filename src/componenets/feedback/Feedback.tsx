import React, { useEffect, useState } from 'react'
import Slider from '../UI/slider/Slider'
import Comment from '../comment/Comment'
import SectionHeader from '../UI/sectionHeader/SectionHeader'
import "./Feedback.scss";
import { useFetching } from '../../hooks/useFetching';
import { PhotoAPI } from '../../apis/photoAPI';
import SkeletonElement from '../UI/skeletonElement/SkeletonElement';
type Props = {
	className?: string,
}

type Post = {
	name: string,
	role: string,
	text: string,
	src?: string,
}

type ProfileInfo = {
	name: string,
	src: string,
}

const commentsHard = [
	{
		name: "John Deep",
		role: "Customer",
		text: `Travel World made booking my recent trip a breeze. Their website was easy to navigate and offered a great selection of travel options. I found a perfect hotel at a fantastic price and the booking process was smooth and secure.`,
	},
	{
		name: "Ally Gomez",
		role: "Customer",
		text: `I wasn't sure where to start planning my vacation, so I contacted Travel World. Their customer service representatives were incredibly helpful and knowledgeable. They listened to my preferences and put together a personalized itinerary that exceeded my expectations.`,
	},
	{
		name: "John Deep",
		role: "Customer",
		text: `I've used Travel World for several trips now and I've always had a positive experience. They consistently offer competitive prices and a wide variety of travel options. Their website is user-friendly and the booking process is efficient.`,
	},
	{
		name: "Alex Bugg",
		role: "Customer",
		text: `Travel World's customer service is top-notch! They were friendly, patient, and always available to answer my questions. They helped me navigate the travel planning process with ease and ensured I had everything I needed for a stress-free vacation.`,
	},
	{
		name: "Johny Dep",
		role: "Customer",
		text: `Travel World offers a one-stop shop for all my travel needs. From booking flights and hotels to finding car rentals and tours, they have it all. Their website is comprehensive and allows me to easily compare different options to find the best deals.`,
	},
	{
		name: "Pidrahui Semen",
		role: "Customer",
		text: `Thanks to Travel World, my recent vacation was a success! Their expertise and attention to detail ensured I had a smooth and enjoyable travel experience. I would highly recommend them to anyone planning a trip.`,
	},
];

const Feedback = ({ className }: Props) => {
	const [comments, setComments] = useState<Post[] | null>(null);
	const [profileInfo, setProfileInfo] = useState<ProfileInfo[] | null>(null);
	const [commentElements, setCommentElements] = useState<React.ReactElement[] | null>(null);

	const [getProfileImages, isImagesLoading, imagesError] = useFetching(async () => {
		const images = await PhotoAPI.fetchPhotos({
			query: "human official colorful smile face",
			amount: 6,
			page: Math.round(Math.random() * 20),
			orientation: "portrait",
			size: "small"
		})
		setProfileInfo(images.photos.map(image => { return { name: image.photographer, src: image.src.medium } }));
	}, true);

	useEffect(() => {
		if (!comments || !comments[0].src) return;
		setCommentElements(comments.map((comment, idx) => (
			<Comment className='feedback-section__comment' key={idx} name={comment.name} imgSrc={comment.src ? comment.src : ""} text={comment.text} role={comment.role} />
		)))
	}, [comments]);


	useEffect(() => {
		if (!comments || !profileInfo) return;
		setComments(comments.map((comment, idx) => {
			return {
				...comment,
				src: profileInfo[idx].src,
				name: profileInfo[idx].name
			}
		}));
	}, [profileInfo]);

	useEffect(() => {
		setComments(commentsHard);
		getProfileImages();
	}, [])

	return (
		<div className={`container`}>
			<div className={`feedback-section ${className ? className : ""}`}>
				<SectionHeader title="Fans Love" text='What our fans say about us' />
				{commentElements ?
					<Slider
						elements={commentElements}
						elemMinWidth={300}
						className='feedback-section__slider'
						elementClass='feedback-section__slider-element'
						autoScrollingByTime={[5000, 30000]}
					/>
					:
					<SkeletonElement className='feedback-section__slider_skeleton' />
				}
			</div>
		</div>
	)
}

export default Feedback