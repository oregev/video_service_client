import React from "react";
import "./duration.css";

export const Duration = ({ duration }) => {
	// Duration format (from youtube API): 'PT00H00M00S'.

	const formatDuration = (duration) => {
		const timeArr = duration.slice(2).split(/[HMS]/);
		timeArr.pop();
		const time = timeArr.map((time) => {
			if (time) return time < 10 ? "0" + time : time;
			else return "00";
		});
		return `${time.join(":")}`;
	};
	return (
		<div className="duration--container">
			<span>{formatDuration(duration)}</span>
		</div>
	);
};
