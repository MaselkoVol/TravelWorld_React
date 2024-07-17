import React, { useEffect, useState, createContext } from 'react'

type Props = {
	children: React.ReactNode,
}

export const ScrollAnimationOnceContext = createContext<IntersectionObserver | null>(null);

function ScrollAnimationOnceProvider({ children }: Props) {
	const [observer, setObserver] = useState<IntersectionObserver | null>(null);
	useEffect(() => {
		const observerInstance = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("_animated-once");
				} else if (entry.target.classList.contains("_animated-once")) {
					observerInstance.unobserve(entry.target);
				}
			});
		});
		setObserver(observerInstance);

		return () => {
			observerInstance.disconnect();
		}
	}, []);

	return (
		<ScrollAnimationOnceContext.Provider value={observer}>
			{children}
		</ScrollAnimationOnceContext.Provider>
	)
}

export default ScrollAnimationOnceProvider;