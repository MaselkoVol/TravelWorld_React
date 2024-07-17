import React, { useEffect, useState } from 'react'
import "./Register.scss";
import ImageSkeleton from '../../componenets/UI/Image/ImageSkeleton';
import SkeletonElement from '../../componenets/UI/skeletonElement/SkeletonElement';
import { Link } from 'react-router-dom';
import Input from '../../componenets/UI/input/Input';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useFetching } from '../../hooks/useFetching';
import { PhotoAPI } from '../../apis/photoAPI';
import Image from '../UI/Image/Image';
import SubmitLink from '../UI/link/SubmitLink';
import IconLink from '../UI/link/IconLink';
import CrossedTitle from '../UI/title/CrossedTitle';
import useScrollAnimationOnce from '../../context/scrollAnimationOnce/useScrollAnimationOnce';
type Props = {}

function Register({ }: Props) {
	const [isMobile, isMobileRef] = useMediaQuery("(max-width: 768px)");
	useScrollAnimationOnce();
	const [image, setImage] = useState<string | null>(null);
	const [getImage, isImgLoading, error] = useFetching(async () => {
		const image = await PhotoAPI.fetchPhotos({
			query: "A woman stands on a mountaintop, overlooking a vast mountain landscape under a clear blue sky.",
			amount: 1,
			page: Math.round(Math.random() * 20),
			size: "large",
			orientation: "portrait",
		})

		setImage(image.photos[0].src.large2x);
	})

	useEffect(() => {
		if (!isMobileRef.current) {
			getImage();
		}
	}, [isMobile])


	return (
		<div className='container'>
			<div className="register-section">
				{!isMobileRef.current && ((isImgLoading || !image) ?
					<SkeletonElement className='register-section__skeleton' />
					:
					<ImageSkeleton className='register-section__image' src={image} />)
				}

				<div className="register-section__content">

					<img className='register-section__mosque' src={require("../../utils/images/png/mosque.png")} />
					<img className='register-section__towers' src={require("../../utils/images/png/towers.png")} />
					<div className='register-section__header'>
						<img className='register-section__plane' src={require("../../utils/images/png/plane.png")} />
						<h1 className='register-section__title'>CREATE AN ACCOUNT</h1>
					</div>
					<h4 className='register-section__sub-title'>By creating an account, you agree to our <Link className='_colored-orange' to="/policy">Privacy policy</Link> and <Link className='_colored-orange' to="/policy">Terms of use.</Link></h4>
					<div className='register-section__personal-info'>
						<Input className="register-section__input" placeholder="First Name" />
						<Input className="register-section__input" placeholder="Last Name" />
					</div>
					<Input className="register-section__input" placeholder="Enter Email" />
					<Input className="register-section__input" placeholder="Enter Password" />
					<Input className="register-section__input" placeholder="Mobile Number" />
					<div className='register-section__buttons'>
						<SubmitLink className='register-section__submit-link' to={"./submit"}>CREATE ACCOUNT</SubmitLink>
						<CrossedTitle className='register-section__splitter'><p className='register-section__splitter-text'>OR</p></CrossedTitle>
						<div className='register-section__register-alternatives'>
							<IconLink className='register-section__icon' href="https://google.com">
								<i className='icon-google_color'>
									<span className='path1'></span>
									<span className='path2'></span>
									<span className='path3'></span>
									<span className='path4'></span>
								</i>
							</IconLink>
							<IconLink className='register-section__icon' href="https://facebook.com">
								<i className='icon-facebook_color'>
									<span className='path1'></span>
									<span className='path2'></span>
								</i>
							</IconLink>
							<IconLink className='register-section__icon' href="https://apple.com">
								<i className='icon-apple_color'></i>
							</IconLink>
						</div>
						<p className='register-section__login'>Already have an account? <Link to={"/login"} className='_colored-orange'>Login</Link></p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register