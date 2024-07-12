import React, { useRef, useEffect, useState, useReducer } from 'react'
import "./Slider.scss";

type BaseProps = {
	elements: React.ReactElement[],
	gap?: number,
	className?: string,
	buttonClass?: string | "no-buttons",
};

// you can select constant amount of elements or you can pass minimum width of every element so slider will be adaptive.
// But you can choose only one of them  

// You can specify gap with css, 
type Props =
	| BaseProps & { amount: number; elemMinWidth?: number }
	| BaseProps & { amount?: number; elemMinWidth: number };

function Slider({ elements, className, gap = 0, elemMinWidth, amount }: Props) {
	const [isComponentReady, setIsComponentReady] = useState(false);

	const [elementsWidth, setElementsWidth] = useState(0);
	const elementsWidthRef = useRef(elementsWidth);
	const setElementsWidthRef = (value: number) => {
		setElementsWidth(value);
		elementsWidthRef.current = value;
	}

	function getElemStyles(idx: number) {
		const basicElemStyles = {
			minWidth: elementsWidth + "px",
		}
		let fullElemStyles = null;
		if (gap) {
			fullElemStyles = {
				...basicElemStyles,
				borderLeft: `${(idx == 0) ? 0 : gap}px solid transparent`,
			}
		} else if (idx == 0) {
			fullElemStyles = {
				...basicElemStyles,
				borderLeft: "none",
			}
		} else {
			fullElemStyles = {
				...basicElemStyles,
			}
		}
		return fullElemStyles;
	}

	const elementsAmountOnPage = useRef(0);
	const currentElementOnScreen = useRef(0);
	const isDragStart = useRef(false);
	const isDraggable = useRef(false);
	const prevPageX = useRef(0);
	const prevScrollLeft = useRef(0);
	const positionDiff = useRef(0);

	const sliderRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);

	function scrollImmediatelyToCurrentPage(container: HTMLElement) {
		container.classList.add("dragging");
		setTimeout(() => {
			const currentElement = container.children[currentElementOnScreen.current] as HTMLElement;
			container.scrollLeft = currentElement.offsetLeft + currentElement.clientLeft;
			setTimeout(() => { container.classList.remove("dragging") }, 0);
		}, 0);
	}

	function resizeElementsWith(container: HTMLElement) {
		const lastChild = container.lastElementChild as HTMLElement;
		const myGap = lastChild.clientLeft;

		if (elemMinWidth) {
			let amountWhichFit = Math.floor((container.offsetWidth + myGap) / (elemMinWidth + myGap));
			// it means only one image can be on page
			if (container.offsetWidth <= elemMinWidth) {
				amountWhichFit = 1;
			}
			let newWidth = (container.offsetWidth - myGap * (amountWhichFit - 1)) / amountWhichFit;

			elementsAmountOnPage.current = amountWhichFit;
			if (window.innerWidth < newWidth) {
				setElementsWidthRef(container.clientWidth);
			} else {
				setElementsWidthRef(newWidth);
			}
		}

		if (amount) {
			setElementsWidthRef((container.offsetWidth - myGap * (amount - 1)) / amount);
		}

		scrollImmediatelyToCurrentPage(container);
	}

	function defineElementsWidth(container: HTMLElement) {
		// amount of pages on screen is constant, sou there is no need to specify them every time
		if (amount) {
			elementsAmountOnPage.current = amount;
		}

		let resizeObserver = new ResizeObserver(() => {
			resizeElementsWith(container);
		});;
		resizeObserver.observe(container);
		// if amount is passed, 
		return resizeObserver;
	};


	function dragStart(e: MouseEvent | TouchEvent, container: HTMLElement) {
		e.preventDefault();
		// updatating global variables value on mouse down event
		isDragStart.current = true;
		if (e instanceof MouseEvent) {
			prevPageX.current = e.pageX;
		} else {
			prevPageX.current = e.touches[0].pageX;
		}
		prevScrollLeft.current = container.scrollLeft;
	};

	function dragging(e: MouseEvent | TouchEvent, container: HTMLElement) {
		// scrolling images/carousel to left according to mouse pointer
		if (!isDragStart.current) return;
		e.preventDefault();
		
		isDraggable.current = true;
		container.classList.add("dragging");
		positionDiff.current = 0;
		if (e instanceof MouseEvent) {
			positionDiff.current = e.pageX - prevPageX.current;
		} else {
			positionDiff.current = e.touches[0].pageX - prevPageX.current;
		}
		container.scrollLeft = prevScrollLeft.current - positionDiff.current;
	};

	function chooseClosestElement(container: HTMLElement, elemDistanceToStart: number, elemPervDistanceToStart: number, pos: number, shift: number): number {
		let distanceDiff = 0;
		if (pos !== 0) {
			distanceDiff = (container.scrollLeft - elemPervDistanceToStart) / (elemDistanceToStart - container.scrollLeft);
		}
		
		let closestElementPos = 0;
		if (positionDiff.current < 0) {
			// swipe to the right
			if (pos !== 0 && distanceDiff < 0.3) {
				closestElementPos = elemPervDistanceToStart;
				currentElementOnScreen.current = pos - shift;
			} else {
				closestElementPos = elemDistanceToStart;
				currentElementOnScreen.current = pos;
			}
		} else {
			if (pos !== 0 && 1 / distanceDiff > 0.3) {
				closestElementPos = elemPervDistanceToStart;
				currentElementOnScreen.current = pos - shift;
			} else {
				closestElementPos = elemDistanceToStart;
				currentElementOnScreen.current = pos;
			}
		}
		return closestElementPos;
	}

	function findClosestElement(container: HTMLElement, byChunks: boolean): number {
		const shift = byChunks ? elementsAmountOnPage.current : 1;
		const elementsHTML = Array.from(container.children) as HTMLElement[];

		let closestElementPos = 0;
		for (let i = 0; i < elementsHTML.length; i += shift) {
			const elemDistanceToStart = elementsHTML[i].offsetLeft + elementsHTML[i].clientLeft;
			let elemPervDistanceToStart = 0;
			if (i !== 0) {
				elemPervDistanceToStart = elementsHTML[i - shift].offsetLeft + elementsHTML[i - shift].clientLeft;
			}
			if (elemDistanceToStart < container.scrollLeft && i !== elementsHTML.length - shift) {
				continue;
			}
			closestElementPos = chooseClosestElement(container, elemDistanceToStart, elemPervDistanceToStart, i, shift);
			break;
		}


		return closestElementPos;
	}

	function autoSlide(container: HTMLElement) {
		let closestElementPos = findClosestElement(container, false);
		container.scrollLeft = closestElementPos;
	};

	const dragStop = (container: HTMLElement) => {
		isDragStart.current = false;
		container.classList.remove("dragging");
		if (!isDraggable.current) return;
		isDraggable.current = false;
		autoSlide(container);
	};


	useEffect(() => {
		const container = containerRef.current;
		if (!container) return;

		const resizeObserver = defineElementsWidth(container);

		const dragStartArgs = (e: MouseEvent | TouchEvent) => (dragStart(e, container));
		const draggingArgs = (e: MouseEvent | TouchEvent) => (dragging(e, container));
		const dragStopArgs = () => (dragStop(container));

		container.addEventListener("mousedown", dragStartArgs);
		container.addEventListener("touchstart", dragStartArgs);
		document.addEventListener("mousemove", draggingArgs);
		container.addEventListener("touchmove", draggingArgs);
		document.addEventListener("mouseup", dragStopArgs);
		container.addEventListener("touchend", dragStopArgs);

		setTimeout(() => setIsComponentReady(true), 5);

		return () => {
			if (resizeObserver) {
				resizeObserver.disconnect();
			}

			container.removeEventListener("mousedown", dragStartArgs);
			container.removeEventListener("touchstart", dragStartArgs);
			document.removeEventListener("mousemove", draggingArgs);
			container.removeEventListener("touchmove", draggingArgs);
			document.removeEventListener("mouseup", dragStopArgs);
			container.removeEventListener("touchend", dragStopArgs);
		};
	}, []);

	return (
		<div ref={sliderRef} className={`super-duper-slider ${className ? className : ""}`}>
			<div ref={containerRef} className='super-duper-slider__container'>
				{elements.map((elem, idx) => (
					<div key={idx} className='super-duper-slider__element-container'
						style={getElemStyles(idx)} >
						{isComponentReady ? elem : <div></div>}
					</div>
				))}
			</div>
		</div >
	)
}

export default Slider;