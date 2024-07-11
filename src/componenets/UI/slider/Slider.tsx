import React, { useRef, useEffect, useState } from 'react'
import "./Slider.scss";

type BaseProps = {
	elements: React.ReactElement[],
	gap?: number,
	className?: string,
	buttonClass?: string | "no-buttons",
};

// you can select constant amount of elements or you can pass minimum width of every element so slider will be adaptive.
// But you can choose only one of them  
type Props =
	| BaseProps & { amount: number; elemMinWidth?: number }
	| BaseProps & { amount?: number; elemMinWidth: number };

function Slider({ elements, className, gap = 0, elemMinWidth, amount }: Props) {

	const [elementsWidth, setElementsWidth] = useState("0px");
	const [imagesAmountOnPage, setImagesAmountOnPage] = useState(0);

	const sliderRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = containerRef.current;

		if (!container) return;

		// if amount is passed, 
		if (amount) {
			setElementsWidth((container.offsetWidth - gap * (amount - 1)) / amount + "px");
			setImagesAmountOnPage(amount)
		}

		// if minWidth is passed
		let resizeObserver: (ResizeObserver | null) = null;
		if (elemMinWidth) {
			resizeObserver = new ResizeObserver((entries) => {
				resizeElementsWithMinWidth(container);
			});

			resizeObserver.observe(container);
		}

		return () => {
			// if minWidth is passed
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
		};
	}, [])

	// if min width is spesified, this function checks how many images fits on the screen and resizes
	function resizeElementsWithMinWidth(container: HTMLElement) {
		if (elemMinWidth) {
			let amountWhichFit = Math.floor((container.offsetWidth + gap) / (elemMinWidth + gap));
			// it means only one image can be on page
			if (container.offsetWidth <= elemMinWidth) {
				amountWhichFit = 1;
			}
			let newWidth = (container.offsetWidth - gap * (amountWhichFit - 1)) / amountWhichFit;

			setImagesAmountOnPage(amountWhichFit);
			if (window.innerWidth < newWidth) {
				setElementsWidth("100%");
				return;
			}
			setElementsWidth(newWidth + "px");
		}
	}


	return (
		<div ref={sliderRef} className={`super-duper-slider ${className ? className : ""}`}>
			<div style={{ gap: gap + "px" }} ref={containerRef} className='super-duper-slider__container'>
				{elements.map((elem, idx) => (
					<div key={idx} style={{ minWidth: elementsWidth }} className='super-duper-slider__element-container'>
						{elem}
					</div>
				))}
			</div>
		</div>
	)
}

export default Slider;