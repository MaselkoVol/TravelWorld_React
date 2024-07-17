import React, { useRef } from 'react'
import "./SkeletonElement.scss";
import { useInitializeCSSVariable } from '../../../hooks/useInitializeCSSVariable';
type Props = {
	skeletonColor?: string,
	className?: string,
}

function SkeletonElement({ skeletonColor, className }: Props) {
	const skeletonRef = useRef<HTMLDivElement | null>(null);
	useInitializeCSSVariable(skeletonRef, "--skeleton-color", skeletonColor);
	return (
		<div ref={skeletonRef} className={`skeleton-element ${className ? className : ""}`}></div>
	)
}

export default SkeletonElement