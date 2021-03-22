import React, { useEffect, useRef } from "react";
import "./spinner.css";

export const Spinner = () => {
	const canvasRef = useRef();
	const context = useRef();

	const drawLoader = () => {
		const ctx = context.current;
		const CENTER_X = 50;
		const CENTER_Y = 50;
		const RADIUS = 50;
		const START_ANGLE = (0 * Math.PI) / 180;
		const END_ENGLE = (270 * Math.PI) / 180;

		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		ctx.beginPath();
		ctx.lineWidth = 6;
		ctx.strokeStyle = "rgb(189, 158, 88)";
		ctx.arc(CENTER_X, CENTER_Y, RADIUS, START_ANGLE, END_ENGLE);
		ctx.stroke();
	};

	useEffect(() => {
		context.current = canvasRef.current.getContext("2d");
		drawLoader();
	}, []);

	return (
		<div className="spinner--container">
			<canvas ref={canvasRef} className="spinner--canvas" height="100" width="100"></canvas>
		</div>
	);
};
