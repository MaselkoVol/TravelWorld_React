import React, { useEffect, useState } from 'react';
import './App.scss';
import { Outlet, useLocation, useNavigation, useOutletContext } from 'react-router';
import "./utils/styles/icons.scss";
import Header from './componenets/header/Header';
import Footer from './componenets/footer/Footer';

import { HeaderType } from './utils/types';
import { addBodyClassIfMobile } from './utils/functions';

function App() {
	const [headerType, setHeaderType] = useState<HeaderType>("all");

	useEffect(()=> {
		addBodyClassIfMobile();
	}, [])

	return (
		<div className="App">
			<div className='wrapper'>
				<Header type={headerType} />
				<main>
					<Outlet context={setHeaderType}/>
				</main>
				<Footer />
			</div>
		</div>
	);
}

export function useHeaderType () {
	return useOutletContext<React.Dispatch<React.SetStateAction<HeaderType>>>();
}

export default App;
