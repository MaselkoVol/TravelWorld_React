import React, { useEffect, useState } from 'react'
import "./Login.scss";
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

function Login({ }: Props) {
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
			<div className="login-section">
				{!isMobileRef.current && ((isImgLoading || !image) ?
					<SkeletonElement className='login-section__skeleton' />
					:
					<ImageSkeleton className='login-section__image' src={image} />)
				}

				<div className="login-section__content">

					<img className='login-section__mosque' src={require("../../utils/images/png/mosque.png")} />
					<img className='login-section__towers' src={require("../../utils/images/png/towers.png")} />
					<div className='login-section__header'>
						<img className='login-section__plane' src={require("../../utils/images/png/plane.png")} />
						<h1 className='login-section__title'>Welcome</h1>
					</div>
					<h4 className='login-section__sub-title'>Login with Email</h4>
					<Input className="login-section__input" placeholder="Enter Email or Username" />
					<Input className="login-section__input" placeholder="Enter Password" />
					<Link className='_colored-orange login-section__forgot-password login-section__link' to="/login/alternatives">Forgot your password?</Link>
					<div className='login-section__buttons'>
						<SubmitLink className='login-section__submit-link' to={"/login/submit"}>LOGIN</SubmitLink>
						<CrossedTitle className='login-section__splitter'><p className='login-section__splitter-text'>OR</p></CrossedTitle>
						<div className='login-section__login-alternatives'>
							<IconLink className='login-section__icon' href="https://google.com">
								<i className='icon-google_color'>
									<span className='path1'></span>
									<span className='path2'></span>
									<span className='path3'></span>
									<span className='path4'></span>
								</i>
							</IconLink>
							<IconLink className='login-section__icon' href="https://facebook.com">
								<i className='icon-facebook_color'>
									<span className='path1'></span>
									<span className='path2'></span>
								</i>
							</IconLink>
							<IconLink className='login-section__icon' href="https://apple.com">
								<i className='icon-apple_color'></i>
							</IconLink>
						</div>
						<p className='login-section__register'>Don’t have account? <Link to={"/register"} className='_colored-orange'>Register Now</Link></p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Login