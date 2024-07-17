import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/Routes';
import ScrollAnimationOnceProvider from './context/scrollAnimationOnce/ScrollAnimationOnceProvider';
import ScrollAnimationProvider from './context/scrollAnimation/ScrollAnimationProvider';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<ScrollAnimationProvider>
		<ScrollAnimationOnceProvider>
			<RouterProvider router={router} />
		</ScrollAnimationOnceProvider>
	</ScrollAnimationProvider>
);

