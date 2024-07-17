import React, { useEffect, useState, createContext } from 'react'

type Props = {
	children: React.ReactNode,
}

export const ScrollAnimationContext = createContext<IntersectionObserver | null>(null);

function ScrollAnimationProvider({ children }: Props) {
	const [observer, setObserver] = useState<IntersectionObserver | null>(null);
	useEffect(() => {
		const observerInstance = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("_animated");
				} else {
					entry.target.classList.remove("_animated");
				}
			});
		});
		setObserver(observerInstance);

		return () => {
			observerInstance.disconnect();
		}
	}, []);

	return (
		<ScrollAnimationContext.Provider value={observer}>
			{children}
		</ScrollAnimationContext.Provider>
	)
}

export default ScrollAnimationProvider;