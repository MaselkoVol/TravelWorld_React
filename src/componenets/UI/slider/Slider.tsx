import React, { useRef, useEffect, useState, useReducer } from 'react'
import "./Slider.scss";
import { useReactiveVariable } from '../../../hooks/useReactiveVariable';

type BaseProps = {
	elements: React.ReactElement[],
	gap?: number,
	className?: string,
	buttonClass?: string | "no-buttons",
	swipeByChunks?: boolean,
	overscroll?: number,
	containerClass?: string,
	navigationContainerClass?: string,
	navigationClass?: string,
	elementClass?: string,
	autoScrollingByTime?: [number, number]
};

// you can select constant amount of elements or you can pass minimum width of every element so slider will be adaptive.
// But you can choose only one of them  

// You can specify gap with css, 
type Props =
	| BaseProps & { amount: number; elemMinWidth?: number }
	| BaseProps & { amount?: number; elemMinWidth: number };

function Slider({
	overscroll = 10,
	elements,
	className,
	gap = 0,
	elemMinWidth,
	amount,
	swipeByChunks = false,
	containerClass,
	navigationContainerClass,
	navigationClass,
	elementClass,
	autoScrollingByTime,
}: Props) {
	const [navigationElements, setNavigationElements] = useState<React.ReactElement[]>([]);
	const [isComponentReady, setIsComponentReady] = useState(false);
	const [canAutoScrollByTime, setCanAutoScrollByTime] = useState(true);

	const [isDragStart, isDragStartRef, setIsDragStart] = useReactiveVariable(false);
	const [isDraggable, isDraggableRef, setIsDraggable] = useReactiveVariable(false);
	const [elementsWidth, elementsWidthRef, setElementsWidth] = useReactiveVariable(0);

	function getElemStyles(idx: number) {
		const basicElemStyles = {
			minWidth: elementsWidth + "px",
			borderRight: idx == elements.length - 1 ? `${overscroll}px solid transparent` : "none",
		}
		let fullElemStyles = null;
		if (gap) {
			fullElemStyles = {
				...basicElemStyles,
				borderLeft: `${(idx == 0) ? overscroll : gap}px solid transparent`,
			}
		} else if (idx == 0) {
			fullElemStyles = {
				...basicElemStyles,
				borderLeft: `${overscroll}px solid transparent`,
			}
		} else {
			fullElemStyles = {
				...basicElemStyles,
			}
		}
		return fullElemStyles;
	}

	const autoScrollInterval = useRef(setInterval(() => { }, Number.MAX_SAFE_INTEGER));
	const previousTouchRef = useRef([0, 0]);
	const elementsAmountOnPage = useRef(0);
	const currentElementOnScreen = useRef(0);
	const prevPageX = useRef(0);
	const prevScrollLeft = useRef(0);
	const positionDiff = useRef(0);

	const sliderRef = useRef<HTMLDivElement>(null);
	const containerRef = useRef<HTMLDivElement>(null);
	const navContainerRef = useRef<HTMLDivElement>(null);



	function convertCurElementToNavElement(currentElement: number, byChunks: boolean) {
		if (byChunks) {
			currentElement = Math.floor(currentElement / elementsAmountOnPage.current);
		}
		return currentElement;
	}

	function scrollImmediatelyToCurrentPage(container: HTMLElement, byChunks: boolean) {
		container.classList.add("dragging");
		setTimeout(() => {
			const currentElement = container.children[currentElementOnScreen.current] as HTMLElement;
			container.scrollLeft = currentElement.offsetLeft + currentElement.clientLeft;
			setTimeout(() => { container.classList.remove("dragging") }, 0);
		}, 0);
		createNavigation(container, byChunks);
	}

	function navigationScrollToPage(container: HTMLElement, idx: number, byChunks: boolean) {
		if (byChunks) {
			idx = Math.floor(idx * elementsAmountOnPage.current);
		}
		const currentElement = container.children[idx] as HTMLElement;
		container.scrollLeft = currentElement.offsetLeft + currentElement.clientLeft;
		currentElementOnScreen.current = idx;
		createNavigation(container, byChunks);
	}

	function calcAmountOfNavigation(byChunks: boolean) {
		let amoutOfNavigation = 0;
		if (byChunks) {
			amoutOfNavigation = Math.ceil(elements.length / elementsAmountOnPage.current);
		} else {
			amoutOfNavigation = elements.length - elementsAmountOnPage.current + 1;
		}
		return amoutOfNavigation
	}

	function createNavigation(container: HTMLElement, byChunks: boolean) {
		const currentElement = convertCurElementToNavElement(currentElementOnScreen.current, byChunks);

		const amountOfNavigation = calcAmountOfNavigation(byChunks);
		const elems = [];
		for (let i = 0; i < amountOfNavigation; i++) {
			elems.push(
				<span
					key={i}
					onClick={() => navigationScrollToPage(container, i, byChunks)}
					className={`super-duper-slider__navigation = ${i == currentElement ? "active" : ""} ${navigationClass ? navigationClass : ""}`}
				></span>
			);
		}
		setNavigationElements(elems);
	}

	function resizeElementsWith(container: HTMLElement) {
		const lastChild = container.lastElementChild as HTMLElement;
		const myGap = lastChild.clientLeft;

		if (elemMinWidth) {
			let amountWhichFit = Math.floor((container.clientWidth + myGap) / (elemMinWidth + myGap));
			// it means only one image can be on page
			if (container.clientWidth <= elemMinWidth) {
				amountWhichFit = 1;
			}
			let newWidth = (container.clientWidth - myGap * (amountWhichFit - 1)) / amountWhichFit;

			if (elementsAmountOnPage.current !== amountWhichFit) {
				elementsAmountOnPage.current = amountWhichFit;
			}

			if (window.innerWidth < newWidth) {
				setElementsWidth(container.clientWidth);
			} else {
				setElementsWidth(newWidth);
			}
		}

		if (amount) {
			setElementsWidth((container.clientWidth - myGap * (amount - 1)) / amount);
		}

		scrollImmediatelyToCurrentPage(container, swipeByChunks);
		createNavigation(container, swipeByChunks);
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
		if (e instanceof TouchEvent) {
			previousTouchRef.current = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
		} else {
			e.preventDefault();
		}
		// updatating global variables value on mouse down event
		setIsDragStart(true);
		if (e instanceof MouseEvent) {
			prevPageX.current = e.pageX;
		} else {
			prevPageX.current = e.touches[0].pageX;
		}
		prevScrollLeft.current = container.scrollLeft;
	};

	function dragging(e: MouseEvent | TouchEvent, container: HTMLElement) {
		// scrolling images/carousel to left according to mouse pointer
		if (!isDragStartRef.current) return;
		e.preventDefault();
		if (e instanceof TouchEvent) {
			let xs = previousTouchRef.current[0];
			let xe = e.changedTouches[0].clientX;
			let ys = previousTouchRef.current[1];
			let ye = e.changedTouches[0].clientY;
			previousTouchRef.current[0] = xe;
			previousTouchRef.current[1] = ye;
			console.log(Math.abs(xs - xe), Math.abs(ys - ye))
			if (Math.abs(xs - xe) < 5 && Math.abs(ys - ye) > 10) {
				dragStop(container);
				return;
			}
		}


		setIsDraggable(true);
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
			if (pos < elements.length - elementsAmountOnPage.current && distanceDiff < 0.1) {
				closestElementPos = elemPervDistanceToStart;
				currentElementOnScreen.current = pos - shift;
			} else {
				closestElementPos = elemDistanceToStart;
				currentElementOnScreen.current = pos;
			}
		} else {
			if (pos !== 0 && 1 / distanceDiff > 0.1) {
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
			if (elemDistanceToStart < container.scrollLeft && i < elementsHTML.length - elementsAmountOnPage.current) {
				continue;
			}
			closestElementPos = chooseClosestElement(container, elemDistanceToStart, elemPervDistanceToStart, i, shift);
			break;
		}


		return closestElementPos;
	}

	function autoSlide(container: HTMLElement) {
		let closestElementPos = findClosestElement(container, swipeByChunks);
		container.scrollLeft = closestElementPos;
	};

	const dragStop = (container: HTMLElement) => {
		setIsDragStart(false);
		container.classList.remove("dragging");
		if (!isDraggableRef.current) return;
		setIsDraggable(false);
		autoSlide(container);
		createNavigation(container, swipeByChunks);
	};


	const intervalFunction = (container: HTMLElement, byChunks: boolean) => {
		let currentElement = convertCurElementToNavElement(currentElementOnScreen.current, byChunks);

		const amountOfNavigation = calcAmountOfNavigation(byChunks);
		if (currentElement >= amountOfNavigation - 1) {
			currentElement = -1;
		}
		navigationScrollToPage(container, currentElement + 1, byChunks)
	}

	const autoScrollByTime = (container: HTMLElement, byChunks: boolean, time: [number, number]) => {

		if (isDragStartRef.current || isDraggableRef.current) {
			if (autoScrollInterval.current) {
				clearInterval(autoScrollInterval.current);
			}
			setCanAutoScrollByTime(false);
			setTimeout(() => setCanAutoScrollByTime(true), time[1]);
		} else if (canAutoScrollByTime) {
			autoScrollInterval.current = setInterval(() => intervalFunction(container, byChunks), time[0]);
		}
	}

	useEffect(() => {
		if (autoScrollingByTime) {
			const container = containerRef.current;
			if (!container) return;
			autoScrollByTime(container, swipeByChunks, autoScrollingByTime);
		}
	}, (autoScrollingByTime ? [canAutoScrollByTime, isDragStart, isDraggable, elements] : [elements]))


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

		// set initial width of elements and navigation
		resizeElementsWith(container);

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
	}, [elements]);

	return (
		<div ref={sliderRef} className={`super-duper-slider ${className ? className : ""}`}>
			<div ref={containerRef} className={`super-duper-slider__container ${containerClass ? containerClass : ""}`}>
				{elements.map((elem, idx) => (
					<div key={idx} className={`super-duper-slider__element-container ${elementClass ? elementClass : ""}`}
						style={getElemStyles(idx)} >
						{isComponentReady ? elem : <div></div>}
					</div>
				))}
			</div>

			<div ref={navContainerRef} className={`super-duper-slider__navigation-container ${navigationContainerClass ? navigationContainerClass : ""}`}>
				{navigationElements}
			</div>
		</div >
	)
}

export default Slider;