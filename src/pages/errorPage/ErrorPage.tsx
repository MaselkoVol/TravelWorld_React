import React from 'react'
import { useNavigate, useRouteError } from 'react-router'
import SubmitLink from '../../componenets/UI/link/SubmitLink';
import "./ErrorPage.scss";
import SubmitButton from '../../componenets/UI/button/SubmitButton';

type Props = {}
type ErroType = {
	status?: number,
	statusText?: string,
	data?: null | string,
	message?: string,
}

function ErrorPage({ }: Props) {
	const navigate = useNavigate();
	const error = useRouteError() as ErroType;
	console.log(error);
	return (
		<div className='container'>
			<div className="error-page">
				<h1 className='error-page__title'>Oops!</h1>
				<p className='error-page__text'>Sorry, an unexpected error has occurred.</p>
				<p className='error-page__description'>
					<i>{error.statusText || error.message}</i>
				</p>
				<SubmitButton onClick={() => navigate(-1)}>Go back</SubmitButton>
			</div>
		</div>
	)
}

export default ErrorPage