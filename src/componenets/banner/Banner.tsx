import React, { useEffect, useState } from 'react'
import "./Banner.scss";
import ImageSkeleton from '../UI/Image/ImageSkeleton';
import Image from '../UI/Image/Image';
import { PhotoAPI } from '../../apis/photoAPI';
import { useFetching } from '../../hooks/useFetching';
import SkeletonElement from '../UI/skeletonElement/SkeletonElement';
import { useMediaQuery } from '../../hooks/useMediaQuery';
type Props = {
	text: string,
	colorTextIndexes?: number[],
}

function Banner({ text, colorTextIndexes }: Props) {
	const [isMobile, isMobileRef] = useMediaQuery("(max-width: 768px)");

	const [textElement, setTextElement] = useState<React.ReactElement | string>("");

	function initText() {
		if (!colorTextIndexes) {
			setTextElement(text);
			return;
		}
		let textArr: (React.ReactElement | string)[] = text.split(" ");
		textArr = textArr.map((text, idx) => colorTextIndexes.includes(idx) ? <span key={idx} className='_colored-orange'>{text + " "}</span> : text + " ");
		setTextElement(<h1 className='banner-section__text'>{textArr}</h1>)
	}

	const [bannerImg, setBannerImg] = useState<string>();
	const [getBannerImg, isImgLoading, error] = useFetching(async () => {
		const image = await PhotoAPI.fetchPhotos({
			query: "view of a tropical island with overwater bungalows, clear blue ocean, and lush greenery.",
			amount: 1,
			page: Math.round(Math.random() * 20),
			orientation: "landscape",
			size: "large",
		});
		if (isMobileRef.current) {
			setBannerImg(image.photos[0].src.large);
		} else {
			setBannerImg(image.photos[0].src.large2x);
		}
	})
	useEffect(() => {
		getBannerImg();
		initText();
	}, [])

	return (
		<div className='banner-section'>
			<div className='container'>
				<div className='banner-section__container'>
					{textElement}
				</div>
			</div>
			{(isImgLoading || !bannerImg) ?
				<SkeletonElement className='banner-section__skeleton' />
				:
				<ImageSkeleton className='banner-section__image' src={bannerImg}/>
			}

		</div>
	)
}

export default Banner